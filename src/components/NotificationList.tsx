import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { List, ListItem, ListItemText } from '@mui/material';

interface Notification {
  id: string;
  message: string;
  read: boolean;
}

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const q = query(collection(firestore, 'notifications'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newNotifications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Notification, 'id'>),
      }));
      setNotifications(newNotifications);
    });

    return () => unsubscribe();
  }, []);

  const handleRead = async (id: string) => {
    await updateDoc(doc(firestore, 'notifications', id), { read: true });
  };

  return (
    <List>
      {notifications.map((notification) => (
        <ListItem key={notification.id} onClick={() => handleRead(notification.id)}>
          <ListItemText primary={notification.message} secondary={notification.read ? "Read" : "Unread"} />
        </ListItem>
      ))}
    </List>
  );
};

export default NotificationList;

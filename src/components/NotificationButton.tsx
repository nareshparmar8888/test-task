import React from "react";
import { Box, Button } from "@mui/material";
import { firestore } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const NotificationButton: React.FC<{ label: string }> = ({ label }) => {
  const handleClick = async () => {
    await addDoc(collection(firestore, "notifications"), {
      message: `You clicked ${label}`,
      read: false,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <Box pr={2}>
      <Button variant="contained" onClick={handleClick} className="pt-2">
        {label}
      </Button>
    </Box>
  );
};

export default NotificationButton;

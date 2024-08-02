import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import NotificationButton from './components/NotificationButton';
import NotificationList from './components/NotificationList';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Notification System
      </Typography>
      <Box display="flex" mb={2}>
        <NotificationButton label="Button 1" />
        <NotificationButton label="Button 2" />
        <NotificationButton label="Button 3" />
      </Box>
      <NotificationList />
    </Container>
  );
};

export default App;
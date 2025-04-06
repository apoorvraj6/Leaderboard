import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import users from './data/user.js';
import TopThree from './Component/TopThree';
import RankList from './Component/RankList';

const App = () => {
  const topThree = users.slice(0, 3);
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'text.primary' }}>
         Leaderboard
      </Typography>
      <TopThree users={topThree} />
      <Box mt={4}>
        <RankList users={users} />
      </Box>
    </Container>
  );
};

export default App;
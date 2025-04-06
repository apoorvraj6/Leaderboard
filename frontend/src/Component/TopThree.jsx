import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

function TopThree(props) {
  const users = props.users;

  const medalColors = ['#FFD700', '#C0C0C0', '#CD7F32']; // Gold, Silver, Bronze

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'background.default',
        paddingTop: 2,
        paddingBottom: 2
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {users.map((user, index) => {
          return (
            <Grid item key={user.id}>
              <Card
                sx={{
                  backgroundColor: medalColors[index],
                  color: '#000',
                  borderRadius: 2,
                  width: 200
                }}
              >
                <CardContent>
                  <Typography variant="h5">{index + 1}</Typography>
                  <Typography variant="h5">{user.name}</Typography>
                  <Typography variant="h6">{user.points} pts</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default TopThree;

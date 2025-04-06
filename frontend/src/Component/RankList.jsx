import React, { useState } from 'react';
import { Card, CardContent, ListItemText, Pagination } from '@mui/material';

function RankList(props) {
  const users = props.users;
  const [page, setPage] = useState(1);
  const ranksPerPage = 20;

  // Skip top 3 users
  const paginatedRanks = users.slice(3);

  function handlePageChange(event, value) {
    setPage(value);
  }

  const startIndex = (page - 1) * ranksPerPage;
  const currentRanks = paginatedRanks.slice(startIndex, startIndex + ranksPerPage);

  return (
    <>
      {currentRanks.map((user, i) => {
        const rankNumber = startIndex + i + 4;

        return (
          <Card
            key={user.id}
            sx={{
              backgroundColor: '#2b2b2b',
              color: '#ffffff',
              borderRadius: 3,
              marginBottom: 2,
            }}
          >
            <CardContent>
              <ListItemText
                primary={`${rankNumber} - ${user.name}`}
                secondary={`${user.points} pts`}
              />
            </CardContent>
          </Card>
        );
      })}

      <Pagination
        count={Math.ceil(paginatedRanks.length / ranksPerPage)}
        page={page}
        onChange={handlePageChange}
        color="primary"
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
}

export default RankList;

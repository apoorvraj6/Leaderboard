const users = [];

for (let i = 1; i <= 100; i++) {
  const user = {
    id: i,
    name: 'User ' + i,
    points: Math.floor(Math.random() * 1000)
  };
  users.push(user);
}


users.sort(function (a, b) {
  return b.points - a.points;
});

export default users;

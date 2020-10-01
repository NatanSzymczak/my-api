import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: "25"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: "24"
  }
]

// all routes in here are starting with /users

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  console.log('POST ROUTE REACHED');
  console.log(req.body);

  const user = req.body;
  users.push(user);

  res.send('POST ROUTE REACHED');
});

export default router;
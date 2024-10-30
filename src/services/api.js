import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
  }
});

// Example GET request using the instance
api.get('/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Example POST request using the instance
api.post('/users', { name: 'Jane Doe', email: 'jane@example.com' })
  .then(response => {
    console.log('User created:', response.data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });

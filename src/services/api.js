import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


// Function to submit a form (POST request)
export const submitForm = (formData) => {
    return api.post('/contact', formData);
};

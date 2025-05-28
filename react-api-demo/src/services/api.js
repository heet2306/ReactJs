import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; // A free API for demo

// Function to get data from API
export const fetchData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

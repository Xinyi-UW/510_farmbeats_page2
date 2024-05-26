import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: { 'Authorization': `Bearer YOUR_API_KEY` }
});

export const getSomeData = async () => {
  try {
    const response = await instance.get('/some-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

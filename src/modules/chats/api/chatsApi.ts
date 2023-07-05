// File: /src/modules/chats/api/chatsApi.ts
import axios from 'axios';

const API_URL = 'http://localhost:8000/v1.0/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwWW8tNG9sQlltdUx3MDhqYWZWSlZiQzg4YUd6N3Z0SGNxUHV1cktlQlowIiwiZXhwIjoxNjg4NTg3NTkzLjA1ODcyMDQsIm9pZCI6ImIxNDNmNjVjLWRhNWItNDI4Yy1hYWY5LTllOWZiYjBiNThjNyJ9.MPP31-S0rpYHQsWrtxppXsruRMZDE4No2_4ysVaMt4U';

axios.defaults.headers.common['Authorization'] = `${TOKEN}`;

export const getChats = async () => {
  try {
    const response = await axios.get(`${API_URL}api/chats`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
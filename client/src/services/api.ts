const API_URL = import.meta.env.PROD 
  ? 'https://solo-leveling-5jbc.onrender.com/api' 
  : 'http://localhost:3000/api';

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  post: async (endpoint: string, body: any) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  }
};
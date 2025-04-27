import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tenants/';

const register = async (tenantData) => {
  const res = await axios.post(API_URL + 'register', tenantData);
  if (res.data.token) {
    localStorage.setItem('tenant', JSON.stringify(res.data));
  }
  return res.data;
};

const login = async (tenantData) => {
  const res = await axios.post(API_URL + 'login', tenantData);
  if (res.data.token) {
    localStorage.setItem('tenant', JSON.stringify(res.data));
  }
  return res.data;
};

const logout = () => {
  localStorage.removeItem('tenant');
};

const authService = { register, login, logout };

export default authService;

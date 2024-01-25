import axios from 'axios';

const baseURL = ' http://localhost:5000';

const AuthService = {
  sendLoginOTP: async (email:string) => {
    try {
      const {data} = await axios.get(`${baseURL}/login-otp/${email}`);
      
      return data;
    } catch (error) {
      throw error;
    }
  },

  verifyLoginOTP: async (email:string, token:string) => {
    try {
      const {data} = await axios.get(`${baseURL}/verify-login-otp/${email}/${token}`);
      
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default AuthService;

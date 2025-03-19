import axios from 'axios';
import { Platform } from 'react-native';

export const apiClient = axios.create({
  baseURL: Platform.OS === 'android' ? 'http://10.0.2.2:45500' : 'http://localhost:45500',
});

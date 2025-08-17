import { encryptPassword } from './utils';
import { logEvent } from '../helpers/audit';

const API_URL = process.env.REACT_APP_AWS_AUTH_URL || '';

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Error de autenticación');
  }
  return data;
}

export async function login(email, password) {
  const encrypted = encryptPassword(password);
  const data = await request('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password: encrypted }),
  });
  logEvent('login', { email });
  return data;
}

export function loginWithGoogle() {
  window.location.href = `${API_URL}/oauth/google`;
}

export async function register(email, password, role = 'lector') {
  const encrypted = encryptPassword(password);
  const data = await request('/register', {
    method: 'POST',
    body: JSON.stringify({ email, password: encrypted, role }),
  });
  logEvent('signup', { email, role });
  return data;
}

export async function changePassword(token, currentPassword, newPassword) {
  const oldEncrypted = encryptPassword(currentPassword);
  const newEncrypted = encryptPassword(newPassword);
  const data = await request('/change-password', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify({ currentPassword: oldEncrypted, newPassword: newEncrypted }),
  });
  logEvent('change_password');
  return data;
}

export async function forgotPassword(email) {
  const data = await request('/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
  logEvent('forgot_password', { email });
  return data;
}

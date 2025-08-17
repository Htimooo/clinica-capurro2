export function encryptPassword(password) {
  if (typeof window !== 'undefined' && window.btoa) {
    return window.btoa(password);
  }
  return Buffer.from(password, 'utf-8').toString('base64');
}

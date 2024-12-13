import Cookies from 'js-cookie';
import * as cookie from 'cookie';


// CLIENTE
export const setCookie = (key, value, options = {}) => {
  Cookies.set(key, value, { ...options });
};

export const getCookie = (key) => Cookies.get(key);

export const removeCookie = (key) => Cookies.remove(key);

// SERVIDOR
export const getServerCookie = (req, key) => {
  if (!req?.headers?.cookie) return null;
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies[key] || null;
};

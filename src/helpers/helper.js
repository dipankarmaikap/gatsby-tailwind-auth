export const isBrowser = () => typeof window !== "undefined";
export const backendUrl = "http://localhost:3000/api";

export const getToken = () =>
  (isBrowser() && window.localStorage.getItem("token")) || {};

export const config = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
};

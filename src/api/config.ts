export const API_CONFIG = {
  baseURL: 'https://heimuer.tv/api.php',
  timeout: 10000,
};

export const setBaseURL = (url: string) => {
  API_CONFIG.baseURL = url;
}; 
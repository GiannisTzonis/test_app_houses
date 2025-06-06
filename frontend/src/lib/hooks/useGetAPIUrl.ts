const LOCAL_API = 'http://localhost:3001/houses';
const FALLBACK_API = 'https://wizard-world-api.herokuapp.com/houses';

export const getAPIUrl = async (): Promise<string> => {
  try {
    const response = await fetch(LOCAL_API, { method: 'HEAD' });
    if (response.ok) {
      return LOCAL_API;
    }
    throw new Error('Local API not responding');
  } catch {
    console.warn('Falling back to remote API:', FALLBACK_API);
    return FALLBACK_API;
  }
};

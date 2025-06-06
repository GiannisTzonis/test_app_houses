const LOCAL_API = 'http://localhost:3001/houses';
const PRODUCTION_API = 'https://wizard-world-api.herokuapp.com/houses';

export const getAPIUrl = async (): Promise<string> => {
  if (process.env.NODE_ENV === 'production') {
    return PRODUCTION_API;
  }

  try {
    const response = await fetch('http://localhost:3001/health', {
      method: 'GET',
      signal: AbortSignal.timeout(2000),
    });

    if (response.ok) {
      return LOCAL_API;
    }
  } catch (error) {
    console.warn('Local API not available, using external API');
    console.log(error);
  }

  return PRODUCTION_API;
};

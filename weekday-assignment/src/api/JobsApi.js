const fetchJobs = async ({ offset, limit }) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    const body = JSON.stringify({ offset, limit });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body,
    };
  
    try {
      const response = await fetch(
        'https://api.weekday.technology/adhoc/getSampleJdJSON',
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      throw error;
    }
  };
  
  export { fetchJobs };
  
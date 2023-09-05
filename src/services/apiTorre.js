async function getSearch(query, signal) {
  try {
    const payload = {
      query: query,
    };
    const ndjsonString = JSON.stringify(payload);

    const response = await fetch(
      'https://torre.ai/api/entities/_searchStream',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-ndjson',
          Accept: 'application/json, text/plain, */*',
        },
        body: ndjsonString,
        signal: signal,
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const textResponse = await response.text();
    const lines = textResponse.split('\n').filter(Boolean);
    const data = lines.map((line) => JSON.parse(line));
    return data || [];
  } catch (error) {
    console.error('There was an error fetching the users:', error);
    return [];
  }
}

async function postRecent(name) {
  const termData = {
    term: name,
  };
  fetch('https://torre-api.onrender.com/searches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(termData),
  });
}

async function getRecent() {
  const response = await fetch('https://torre-api.onrender.com/searches');
  const data = await response.json();
  return data;
}

export { getSearch, postRecent, getRecent };

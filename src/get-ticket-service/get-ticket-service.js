export async function getSearchId() {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (response.ok) {
    const result = await response.json();
    return result.searchId;
  }
}

export async function getPartTickets(searchId) {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (response.ok) {
      return await response.json();
    }
    return { tickets: [], stop: false };
  } catch (e) {
    return { tickets: [], stop: false };
  }
}

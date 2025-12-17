const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function baseFetchData(url, options) {
  const res = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  if (!res.ok) {
    throw new Error(res.text());
  }
  const data = await res.json();
  return data;
}

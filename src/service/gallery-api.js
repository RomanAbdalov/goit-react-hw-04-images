const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35659589-cd2a79f588c2c09a92779613b';

export async function fetchGallery({ searchText, page, perPage }) {
  const response = await fetch(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Smth went wrong...`);
  }
}

export default async function findVideos(term) {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const searchTerm = String(term);

  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=10&q=${searchTerm}`
  )
    .then((response) => response.json())
    .then((data) => {
      const searchResults = data.items.slice(0, 10).map((item) => {
        return {
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.default.url,
        };
      });
      return searchResults; // or do something else with the search results
    })
    .catch((error) => console.error(error));
}

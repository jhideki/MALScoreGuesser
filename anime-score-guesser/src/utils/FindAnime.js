export default async function getAnimeStats(id) {
  const url = `https://api.jikan.moe/v4/anime/${id}`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

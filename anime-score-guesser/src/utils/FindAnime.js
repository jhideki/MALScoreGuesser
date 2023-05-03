export default async function getAnime() {
  const url = `https://api.jikan.moe/v4/random/anime`;
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

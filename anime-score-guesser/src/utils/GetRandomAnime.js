export default async function getAnime() {
  let apiKey = process.env.REACT_APP_RAPID_API_KEY;
  let rank = getRandomNumber(1, 3000);
  const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${rank}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

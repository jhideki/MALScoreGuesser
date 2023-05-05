export default async function getAnime() {
  let rank = getRandomNumber(1, 3000);
  const url = `https://anime-db.p.rapidapi.com/anime/by-ranking/${rank}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a249bc73e8msh486e0da45b2071ap1b0467jsnc816e9d01273",
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

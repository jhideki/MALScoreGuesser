import findVideos from "./FindVideos.js";
import getAnimeStats from "./FindAnime.js";
import getAnime from "./GetRandomAnime.js";

export default async function getClip() {
  let data = await getAnime();
  let animeId = JSON.parse(data);
  console.log(animeId._id);
  data = await getAnimeStats(animeId._id);
  let animeData = JSON.parse(data);
  const anime = {
    name: animeData.data.title,
    score: animeData.data.score,
    rank: animeData.data.rank,
    videoId: "",
  };
  let searchTerm = anime.name + " clip";
  let videos = await findVideos(searchTerm);
  anime.videoId = getVideo(videos, searchTerm);
  return anime;
}

function getVideo(videos, term) {
  videos.forEach((video) => {
    if (video.title.includes(term)) {
      return video.id;
    }
  });
  return videos[0].id;
}

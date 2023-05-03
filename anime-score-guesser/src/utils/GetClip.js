import findVideos from "./FindVideos.js";
import getAnime from "./FindAnime.js";

export default async function getClip() {
  let data = await getAnime();
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
  //console.log(anime);
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

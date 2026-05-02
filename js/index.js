const tracks = [
  {
    title: "",
    artist: "П'яти в олів'є",
    src: "./audio/song.mp3",
    cover: "./img/5447179478627981132.jpg"
  },
  {
    title: "людина лось",
    artist: "П'яти в олів'є",
    src: "./audio/song.mp3",
    cover: "./img/5454299288864233232.jpg"
  },
  {
    title: "Презие мого дяді",
    artist: "П'яти в олів'є",
    src: "./audio/song.mp3",
    cover: "./img/5454299288864233234.jpg"
  },
  {
    title: "зірочка палай",
    artist: "П'яти в олів'є",
    src: "./audio/song.mp3",
    cover: "./img/5454299288864233262.jpg"
  }
];

document.querySelectorAll(".demka-1").forEach((player, index) => {
  const audio = player.querySelector("audio");
  const playBtn = player.querySelector(".playBtn");
  const progress = player.querySelector(".progress");
  const progressFilled = player.querySelector(".progress-filled");

  const title = player.querySelector(".title");
  const artist = player.querySelector(".artist");
  const cover = player.querySelector(".cover");

  const track = tracks[index];

  audio.src = track.src;
  title.textContent = track.title;
  artist.textContent = track.artist;
  cover.src = track.cover;

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
    } else {
      audio.pause();
      playBtn.textContent = "▶";
    }
  });

  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = percent + "%";
  });

  progress.addEventListener("click", (e) => {
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });
});
  const tracks = [
    {
      title: "My Song",
      artist: "My Artist",
      src: "../audio/rayan-gosling-ПВО-2026-04-29-16_55-_1_.mp3", // вставь сюда свою песню
      cover: "../img/5447179478627981132.jpg"
    }
  ];

  let current = 0;
  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('playBtn');
  const progress = document.getElementById('progress');
  const progressFilled = document.getElementById('progressFilled');

  function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    document.querySelector('.title').textContent = track.title;
    document.querySelector('.artist').textContent = track.artist;
    document.getElementById('cover').src = track.cover;
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  }

  function next() {
    // отключено (один трек)
  }

  function prev() {
    // отключено (один трек)
  }

  audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = percent + '%';
  });

  progress.addEventListener('click', (e) => {
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });

  loadTrack(current);
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
new TypeIt(".box", {
    strings: "Este prea periculos să vezi asta singur stapine!",
    speed: 65,
    loop: false,
  }).go();
  listOfPhotos = ['ciordeala.jpg', 'doriabi.png', 'dorian.png'];
  listOfVideos = ['kata.mp4', 'coca.mp4'] ;

document.querySelector('body').style.height = window.innerHeight + 'px';
var rn = Math.floor(Math.random() * listOfPhotos.length);
var dec = Math.floor(Math.random() * 2);

if ( dec == 1 ) {
  video = document.createElement('video'); video.src = 'assets/' + listOfVideos[Math.floor(Math.random() * listOfVideos.length)];
  btn = document.createElement('button'); document.getElementById('btnSpace').appendChild(btn); btn.innerText = 'Play';
  btn2 = document.createElement('button'); document.getElementById('btnSpace').appendChild(btn2); btn2.innerText = 'Stop';

  btn.setAttribute('onclick', 'document.querySelector("video").play();'); btn.style.display = 'none';
  btn2.setAttribute('onclick', 'document.querySelector("video").pause();'); btn2.style.display = 'none';

  setTimeout(() => document.getElementById('main').appendChild(video), 4750);
  setTimeout(() => btn.style.display = 'block', 4750);
  setTimeout(() => btn2.style.display = 'block', 4750);
}
else{
  img = document.createElement('img'); img.setAttribute('src', 'assets/' + listOfPhotos[Math.floor(Math.random() * listOfPhotos.length)]);
  setTimeout(() => document.getElementById('main').appendChild(img), 4750);
}

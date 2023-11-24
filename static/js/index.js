let i; document.querySelector('body').style.height = window.innerHeight - 50 + 'px';
function dragElement(el){
  document.querySelectorAll(el).forEach((element) =>{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

  function dragElements(e) {
    pos1 = pos3 - e.clientX;  pos2 = pos4 - e.clientY;
    pos3 = e.clientX; pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }
  function cancelDragelements() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function dragMouseDown(e) {
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = cancelDragelements;
    document.onmousemove = dragElements;
  }
  })
}

function moveDPopa(){
  document.getElementById('hatz').play();
  document.querySelector('.varasimulatorPopup').style.top = (getRandomArbitrary(window.innerHeight * 0, window.innerHeight * .7)) + 'px';
  document.querySelector('.varasimulatorPopup').style.left = (getRandomArbitrary(window.innerWidth * 0, window.innerWidth * .7)) + 'px';
  };


//dragElement(".desktopApp");
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min ;
}

function enterTextarea(){
  document.getElementById('terminalInput').addEventListener("keypress", function(event) {
      var prevCommand = document.createElement('div'); prevCommand.style.paddingLeft = '.33rem';
      prevCommand.innerHTML = document.getElementById('terminalInput').value;
      if ((event.key === "Enter") && document.getElementById('terminalInput').value != ''){ 
        document.getElementById('pastDiv').appendChild(prevCommand);
        document.getElementById('terminalInput').value = '';
        
      }
    });
}

var apps = ['terminal', 'bahoiImage', 'pcuvant', 'gta6', 'copilasii', 'ppe',
              'GChelutzu', 'iloveyou', 'varasimulator', 'corabiapiratului', 'credits'];

var icons = ['terminal.png', 'image.png', 'pcuvant.png', 'gta6.png', 
            'copilasii.png', 'image.png', 'mm.png', 'iloveyou.png', 'chelutzu.png',
          'pb.png', 'credits.png']

var titles = ['Terminal', 'Bahoi', 'jocul Khuvinthelor', 'gta', 
            'copilasii', 'prima poza ever cu un dinozaur','M. M.', 'ILOVEYOU', 'vara simulator', 'Corabia Piratului',
          'Credits.txt']

for(let j = 0; j < apps.length; j++){
  lab = document.createElement('div'); lab.classList.add(`${apps[j]}`);
      document.getElementById('label2').appendChild(lab);
      document.querySelector(`.${apps[j]}`).innerHTML = `
     
        <div class = 'blockApp ${apps[j]} display-flex-align-items-center-justify-content-center' id = '${apps[j]}Section'>
        <!--<a href = '#${apps[j]}Section'>-->
          <div class = 'desktopApp ${apps[j]}Desktop'>
              <div class = 'desktopApp w-100 h-100'></div>
          <div class="w-100 h-100 display-flex-align-items-center-justify-content-center" style = 'flex-direction: column;'>
              <div class = 'w-100 display-flex-align-items-center-justify-content-center'>
                  <img src="assets/icons/${icons[j]}" style = 'height : 2rem; '>
              </div>
              <span class = 'w-100 display-flex-align-items-center-justify-content-center' style = 'font-size: .7rem; color : white;'>${titles[j]}</span>
          </div>
          </div>
          <!--</a>-->
        </div>

      `
}

function appPopupStructure(app, title, icon, lastDSCommand){
  return `<div style = 'padding-bottom : .2rem; background-color : #D4D3D2;'>
  <div 
    style = 'gap : .33rem; padding-left : .33rem; padding : .2rem; height : 1rem; background : linear-gradient(45deg, #7FA9C4, #2D536B)'
    class = 'display-flex-align-items-center'>
      <img src = 'assets/icons/${icon}' style = 'height : 100%;'> <span style = 'width : 75%; display : flex; align-items : start;'>${title}</span>
      <div class = 'w-100 display-flex-align-items-center' style = 'justify-content : right; padding-right : .33rem'>
        <button class = '${app}Close' onclick = "document.querySelector('.popupLocation').removeChild(document.querySelector('.${app}Popup'));"> x </button>
      </div>
    </div>
  </div>
  ${lastDSCommand}`;
}

function createApp(elem){ 
  var element = document.createElement('div');
  element.classList.add('desktopApp', elem + 'Popup');
  document.querySelector('.popupLocation').appendChild(element);
  element.style.display = 'block';
};

for( i = 0; i < apps.length; i++){
  let j = i; 
  fetch("static/js/local.json").then(response => response.json()).then(data => {
    const animations = ['fadeIn', 'rotation', 'rotation2', 'translateX'];
    const animations2 = ['fadeOut', 'derotation', 'derotation2', 'translateX2'];
      document.querySelector('.' + apps[j] + 'Desktop').ondblclick = function()
        {
          
          getJSONelement = eval(`data.${apps[j]}`);

          var element = document.createElement('div');
          element.classList.add('desktopApp', `${apps[j]}Popup`);

          document.querySelector('.popupLocation').appendChild(element);
          element.style.display = 'block';
          
          
          element.style.width = (getJSONelement.width) + 'rem'; 
          element.style.height = (getJSONelement.height ) + 'rem'; 
          element.style.overflow = 'hidden'; 
          element.style.animation = `${animations[Math.floor(Math.random()*animations.length)]}  .5s`; 

          element.style.backgroundColor = getJSONelement.backgroundColor;
          element.style.top = (getRandomArbitrary(window.innerHeight * 0.25, window.innerHeight * 0.3)) + 'px';
          element.style.left = (getRandomArbitrary(window.innerWidth * 0.25, window.innerWidth * 0.75)) + 'px';
          var icon = getJSONelement.icon; var title = getJSONelement.title;

          dragElement('.desktopApp');

          if(getJSONelement.appinfo == 'true') {
            element.innerHTML = appPopupStructure(apps[j], title, icon, getJSONelement.content);
        
            
            element.style.border = '3px solid #D4D3D2';
            element.style.borderStyle = 'outset'; 
        }
            else element.innerHTML = `${getJSONelement.content}`

            if(apps[j] == 'terminal') {
              element.style.overflowY = 'auto';
              element.style.overflowX = 'hidden';
              enterTextarea();
            }

            if(apps[j] == 'iloveyou'){
              document.querySelector('textarea').value = 
                `
kindly check the attached LOVELETTER
(See attached file : LOVE-LETTER-FOR-YOU.TXT.vbs)

coming from me. `
            }

            if(apps[j] == 'varasimulator') {
              element.style.top = window.innerHeight - 350 + 'px';
              element.style.left = window.innerWidth - 500 + 'px';
              document.getElementById('bassAudio').play();
              try{
                document.getElementById('dpopa').addEventListener('onclick', function(){
                  document.getElementById('hatz').play();
                });
              } catch{};
            }
        };
    }
  );
  
}
dragElement('.desktopApp');

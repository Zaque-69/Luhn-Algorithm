function mainStructure(elem, elem2, elem3, removeStr){
  return ` 
<div class = 'blockApp ${elem} display-flex-align-items-center-justify-content-center' id = '${elem}Section'>
  <!--<a href = '#${elem}Section'>-->
    <div class = 'desktopApp ${elem}Desktop ${removeStr}'>
        <div class = 'desktopApp w-100 h-100'></div>
    <div class="w-100 h-100 display-flex-align-items-center-justify-content-center" style = 'flex-direction: column;'>
        <div class = 'w-100 display-flex-align-items-center-justify-content-center'>
            <img src="assets/icons/${elem2}" style = 'height : 2.33rem; '>
        </div>
        <span class = 'w-100 display-flex-align-items-center-justify-content-center' style = 'font-size: .7rem; color : white;'>${elem3}</span>
    </div>
    </div>
    <!--</a>-->
  </div>`
}

function appPopupStructure(app, title, icon, lastDSCommand, removeStr){
  return `
<div style = 'padding-bottom : .2rem; background-color : #D4D3D2;'>
  <div style = 'gap : .33rem; padding-left : .33rem; padding : .2rem; height : 1rem; background : linear-gradient(45deg, #7FA9C4, #2D536B)' class = 'display-flex-align-items-center'>
    <img src = 'assets/icons/${icon}' style = 'height : 100%;'> <span style = 'width : 75%; display : flex; align-items : start;'>${title}</span>
    <div class = 'w-100 display-flex-align-items-center' style = 'justify-content : right; padding-right : .33rem'>
      <button class = '${app}Close' onclick = "document.querySelector('.${removeStr}').remove()"> x </button>
    </div>
  </div>
</div>
  ${lastDSCommand}`;
}

function returnIloveyou(){
  return`
kindly check the attached LOVELETTER
(See attached file : LOVE-LETTER-FOR-YOU.TXT.vbs)

coming from me. `
}

function menu(x, y){
  return`
<div style = 'width : 10rem;  border : 2px solid #DFDFDF; border-style: outset; position : relative; left : ${x}; top : ${y};' id = 'menu'>
  <div class = 'createFolder display-flex align-items-center hoverBlue folder' style = 'font-size: .8rem; height: 1.33rem; background-color: #C0C0C0; justify-content : start;' onclick = "createDocumentOrShortcut();"><span class = 'w-100 hoverBlue display-flex' style = 'padding-left : 1.5rem; justify-content : start;'>Creaza un folder...</span></div>  
  <div class = ' display-flex align-items-center hoverBlue folder' style = 'font-size: .8rem; height: 1.33rem; background-color: #C0C0C0; justify-content : start;'><span class = 'w-100 hoverBlue display-flex' style = 'padding-left : 1.5rem; justify-content : start;'>Creaza un shortcut...</span></div>
  <div class = ' display-flex align-items-center hoverBlue folder' style = 'font-size: .8rem; height: 1.33rem; background-color: #C0C0C0; justify-content : start;' ><span class = 'w-100 hoverBlue display-flex' style = 'padding-left : 1.5rem; justify-content : start;'>Creaza un document...</span></div>
  <div class = ' display-flex align-items-center hoverBlue folder' style = 'font-size: .8rem; height: 1.33rem; background-color: #C0C0C0; justify-content : start; border : 1px solid #DFDFDF; border-style: outset; width : 99%'' onclick = "console.log('ma-ta');"><span class = 'w-100 hoverBlue display-flex' style = 'padding-left : 1.5rem; justify-content : start;'>Terminal</span></div>
</div>`
}

function messagebox(string, title, image, internTitle, content){
  return`
<div class = 'messagebox desktopApp' id = '${string}', style = 'cursor: all-scroll;'>
  <div style = 'padding-bottom : .2rem; background-color : #D4D3D2;'>
      <div 
      style = 'gap : .33rem; padding-left : .33rem; padding : .2rem; height : 1rem; background : linear-gradient(45deg, #7FA9C4, #2D536B)'
      class = 'display-flex-align-items-center'>
      <span style = 'width : 75%; display : flex; align-items : start;'>${title}</span>
      <div class = 'w-100 display-flex-align-items-center' style = 'justify-content : right; padding-right : .33rem'>
          <button onclick = "document.getElementById('${string}').remove();"> x </button>
      </div>
      </div>
  </div>
  <div class = 'display-flex-align-items-center-justify-content-center ' style = 'flex-direction: column;'>
      <div class = 'display-flex-align-items-center-justify-content-center'>
          <img src="assets/icons/${image}.png" alt="ERROR">
          <span style = 'font-size: 1.33rem; padding : .66rem;' class = 'display-flex-align-items-center-justify-content-center'><b> ${internTitle} </b></span>
      </div>
      <div class = 'display-flex-align-items-center-justify-content-center' style = 'padding : .66rem;'> ${content} </div>
  </div>
</div>
`
}

function redirectURL(block, url){
  return`
  <a href = "${url}">
    ${block}
  </a> `
}

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
};

//document.querySelector('.cutie').innerHTML = messagebox('idk', 'jqkwe', 'error', 'hihihi', 'hahaha');
try{
  document.getElementById('fullBg').style.height = window.innerHeight + 'px';
  document.getElementById('fullBg').style.width = window.innerWidth + 'px';
}
catch{};

//showing menu on clicking right buttonF

/*
  addEventListener('contextmenu', function(e){
  e.preventDefault();
  //this.alert(`${elem.clientX} si ${elem.clientY}`);
  var x = e.clientX + 'px'; var y = e.clientY - 320 +  'px';
  
  //console.log(x, y);
  document.getElementById('fullBg').innerHTML = menu(x, y);
})  */


//every time lister to right click
addEventListener('click', function(e){
    if(this.document.getElementById('menu') != null) 
      this.document.getElementById('menu').remove();
});

//function for dragging apps on desktop
let i; document.querySelector('.main').style.height = window.innerHeight - 35 + 'px';


//this function fetch data from main json and create an app
function createApp(elem){ 
  var element = document.createElement('div');
  element.classList.add('desktopApp', elem + 'Popup');
  document.querySelector('.popupLocation').appendChild(element);
  fetch("static/js/local.json").then(response => response.json()).then(data => {
    getJSONelement = eval(`data.${elem}`);
    element.style.height = getJSONelement.height + 'rem';
  })
  element.style.display = 'block';
  element.style.position = 'absolute';
};

//random number function 
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min ;
}

//function for varasimulator app 
function moveDPopa(){
  document.getElementById('hatz').play();
  document.querySelector('.varasimulatorPopup').style.top = (getRandomArbitrary(window.innerHeight * 0, window.innerHeight * .7)) + 'px';
  document.querySelector('.varasimulatorPopup').style.left = (getRandomArbitrary(window.innerWidth * 0, window.innerWidth * .7)) + 'px';
  };

//function for terminal commands when you enter something
function enterTextarea(){
  console.log(terminalInput.value);
  terminalInput = document.getElementById('terminalInput')
  terminalInput.addEventListener("keypress", function(event) {
      var prevCommand = document.createElement('div'); prevCommand.style.paddingLeft = '.33rem';
      prevCommand.innerHTML = terminalInput.value;
      if ((event.key === "Enter") && terminalInput.value != ''){ 
        switch ( terminalInput.value ){
          case "3d":
            let img = document.createElement('img'); 
            img.setAttribute('src', 'assets/gallery/3.gif');
            img.setAttribute('id', 'img3d');
            img.setAttribute('onclick', 'document.getElementById("img3d").remove();');
            document.getElementById('beforeMain').appendChild(img)
        }
        document.getElementById('pastDiv').appendChild(prevCommand);
        createApp(terminalInput.value);
        terminalInput.value = '';
    }
  });
}

//create a specific ID for each app ( when close the app )
function makeid(length) {
  let result = ''; counter = 0;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    counter++;
  }
  return result;
}

//list for app names
var apps = ['terminal', 'bahoiImage', 'pcuvant', 'gta6', 'copilasii', 'ppe',
        'GChelutzu', 'iloveyou', 'varasimulator',  'credits','guide', 'empty',
        'assets', 'PCuvantFolder', 'chelutzuFolder', "index", "chelutzu_assets",
        "ciordeala", "doriabi", 'str3su', 'katalin'];

//list for ico location 
var icons = ['terminal.png', 'image.png', 'pcuvant.png', 'gta.png', 'copilasii.png', 
        'image.png', 'mm.png', 'iloveyou.png', 'chelutzu.png','credits.png', 'manual.png',
        'folder.png', 'folder.png', 'folder.png', 'folder.png', "html.png", "folder.png",
        "image.png", "image.png", 'str3su.png', "katalin.png"];

        //list for titles
var titles = ['Terminal', 'Bahoi', 'jocul Khuvinthelor', 'gta', 'copilasii',
        'prima poza ever cu un dinozaur', 'M. M.', 'ILOVEYOU', 'vara simulator',
        'Credits.txt',  'Guide', 'static', 'assets', 'PCuvant', 'chelutzu',  
        'index.html', 'assets', 'ciordeala.png', "doriabi.png", 'PC BUILD SIMULATOR',
        "brt"]

//this for is used in lists, fetching content fron json and display every app, so we dom't have to write manually in html. Js will do

for( j = 0; j < apps.length; j++){
  let i = j; 
  fetch("static/js/local.json").then(response => response.json()).then(data => {
    const animations = ['fadeIn', 'rotation', 'rotation2', 'translateX'];
    //const animations2 = ['fadeOut', 'derotation', 'derotation2', 'translateX2'];

    try {
      lab = document.createElement('div'); 
      lab.classList.add(`${apps[i]}`);
      mypcApps = document.createElement('div'); 
      mypcApps.classList.add(`${apps[i]}`, "mypcAppsWindowIcon", );

      if(Boolean(eval(`data.${apps[i]}.place`))){
        document.getElementById(eval(`data.${apps[i]}.place`)).appendChild(lab);
      } document.querySelector('.mypcAppsWindow').appendChild(mypcApps);

      document.querySelectorAll(`.${apps[i]}`).forEach((e) =>{
        e.innerHTML = mainStructure(apps[i], icons[i], titles[i], makeid(5));
      })
    } 
    catch{ };

    document.querySelectorAll('.' + apps[i] + 'Desktop').forEach((e) =>{
      e.ondblclick = function(){

    removeString = makeid(5);  
    getJSONelement = eval(`data.${apps[i]}`);

    //add classlist path app in mypc
    if(getJSONelement.DesktopApp == 'true') {
      var element = document.createElement('div');
      element.classList.add('desktopApp', `${apps[i]}Popup`, removeString);
      document.querySelector('.popupLocation').appendChild(element);
      element.style.display = 'block';
    }
        
    try {
      element.style.width = (getJSONelement.width) + 'rem'; 
      element.style.height = (getJSONelement.height ) + 'rem'; 
      element.style.overflow = 'hidden'; 
      element.style.animation = `${animations[Math.floor(Math.random()*animations.length)]}  .5s`; 
      element.style.backgroundColor = getJSONelement.backgroundColor;
      element.style.top = (getRandomArbitrary(window.innerHeight * 0.25, window.innerHeight * 0.3)) + 'px';
      element.style.left = (getRandomArbitrary(window.innerWidth * 0.25, window.innerWidth * 0.75)) + 'px';
      var icon = getJSONelement.icon; var title = getJSONelement.title;
    }
    catch{ }

      dragElement('.desktopApp');

      if(getJSONelement.appinfo == 'true') {
        element.innerHTML = appPopupStructure(apps[i], title, icon, getJSONelement.content, removeString);
    
        element.style.border = '3px solid #D4D3D2';
        element.style.borderStyle = 'outset'; 
      }
          else 
            try{
              element.innerHTML = `${getJSONelement.content}`} 
            catch{ };

          //these are apps that affect dirrectly the activity on desktop, the other one use iframe 
          if(apps[i] == 'terminal') {
            element.style.overflowY = 'auto';
            element.style.overflowX = 'hidden';
            enterTextarea();
            //terminalInput
          };

          if(apps[i] == 'iloveyou'){
            document.querySelector('textarea').value = returnIloveyou();
            document.getElementById('iloveyou').onclick = function(){
              console.log('boule');
            };
          }

          if(apps[i] == 'varasimulator') {
            element.style.top = window.innerHeight - 350 + 'px';
            element.style.left = window.innerWidth - 500 + 'px';
            document.getElementById('bassAudio').play();
            try{
              document.getElementById('dpopa').addEventListener('onclick', function(){
              document.getElementById('hatz').play();
              });
            } catch{};
          };              
        };
      })
    }
  );
}

//date function

let date = new Date();

document.querySelector('.date').innerHTML = date.toLocaleDateString(), date.getHours();
document.querySelector('.year').innerHTML = date.getFullYear() + " / " + date.getMonth() + " / " + date.getDay();
document.querySelector('.date').innerHTML = date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();

function createDocumentOrShortcut(e){
  let base = document.createElement('div'); base.classList.add("desktopApp"); 
  var createSpace = document.getElementById('label3').appendChild(base);
  createSpace.innerHTML = redirectURL(mainStructure("shorrtcut", "credits.png", "Idk", "pwhw"), "https://example.com")
};

let i;
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min ;
}

dragElement(".desktopApp");
var apps = ['terminal', 'bahoiImage', 'pcuvant', 'gta6', 'copilasii', 'ppe',
              'GChelutzu'];

var icons = ['terminal.png', 'image.png', 'pcuvant.png', 'gta6.png', 
            'copilasii.png', 'image.png', 'mm.png',]

var titles = ['Terminal', 'Bahoi', 'jocul Khuvinthelor', 'gta', 
            'copilasii', 'prima poza ever','M. M.']
for(let j = 0; j < apps.length; j++){
  lab = document.createElement('div'); lab.classList.add(`${apps[j]}`);
      document.getElementById('label2').appendChild(lab);
      document.querySelector(`.${apps[j]}`).innerHTML = `
      <div class = 'blockApp ${apps[j]} display-flex-align-items-center-justify-content-center'>
        <div class = 'desktopApp ${apps[j]}Desktop'>
            <div class = 'desktopApp w-100 h-100'></div>
        <div class="w-100 h-100 display-flex-align-items-center-justify-content-center" style = 'flex-direction: column;'>
            <div class = 'w-100 display-flex-align-items-center-justify-content-center'>
                <img src="assets/icons/${icons[j]}" style = 'height : 2.3rem; '>
            </div>
            <span class = 'w-100 display-flex-align-items-center-justify-content-center' style = 'font-size: .7rem; color : white;'>${titles[j]}</span>
        </div>
        </div>
      </div>
      `
}

for( i = 0; i < apps.length; i++){
  let j = i; 
  fetch("static/js/local.json").then(response => response.json()).then(data => {
    const apps = ['terminal', 'copilasii', 'pcuvant', 'gta6', 'bahoiImage', 'ppe',
                  'GChelutzu']; 
      //document.querySelector('.' + apps[j] + 'Popup').style.display = 'none';
      document.querySelector('.' + apps[j] + 'Desktop').ondblclick = function()
        {
         
          var element = document.createElement('div');
          element.classList.add('desktopApp', `${apps[j]}Popup`);
          //console.log(element);

          document.querySelector('.popupLocation').appendChild(element)
          element.style.display = 'block';
          getJSONelement = eval(`data.${apps[j]}`);
          
          element.style.border = '3px solid #D4D3D2';
          element.style.borderStyle = 'outset'; 
          element.style.width = (getJSONelement.width) + 'rem'; 
          element.style.height = (getJSONelement.height ) + 'rem'; 

          //console.log(getJSONelement.height); console.log(getJSONelement.height - 1)

          element.style.backgroundColor = getJSONelement.backgroundColor;
          element.style.top = (getRandomArbitrary(window.innerHeight * 0.25, window.innerHeight * 0.3)) + 'px';
          element.style.left = (getRandomArbitrary(window.innerWidth * 0.25, window.innerWidth * 0.75)) + 'px';
          var icon = getJSONelement.icon; var title = getJSONelement.title;
          //calling the drag function after appending child in the popupLocation div to be movable
          dragElement(".desktopApp");
          element.innerHTML = 
            `<div style = 'padding-bottom : .2rem; background-color : #D4D3D2;'>
              <div 
              style = 'gap : .33rem; padding-left : .33rem; padding : .2rem; height : 1rem; background : linear-gradient(45deg, #7FA9C4, #2D536B)'
              class = 'display-flex-align-items-center'>
                <img src = 'assets/icons/${icon}' style = 'height : 100%;'> <span style = 'width : 75%; display : flex; align-items : start;'>${title}</span>
                <div class = 'w-100 display-flex-align-items-center' style = 'justify-content : right; padding-right : .33rem'>
                  <button class = '${apps[j]}Close' onclick = "document.querySelector('.popupLocation').removeChild(document.querySelector('.${apps[j]}Popup'));"> x </button>
                </div>
              </div>
            </div>
            ${getJSONelement.content}`;
        };
        
    }
  );
}



  //console.log(document.getElementById('terminalInput').value);

let dataGlobal, globalList = [];

  const getData = async () => {
    const response = await fetch("static/js/local.json");
    const data = await response.json();
    dataGlobal = data;
    return data;
  };
  
  (async () => {
    await getData();
    for(let i = 0; i < apps.length; i++) {
      element = apps[i]
      globalList.push(eval(`dataGlobal.${apps[i]}.path`));
    }
  })();

var count = 0;


document.getElementById('PC').ondblclick = function(){
    const animations = ['fadeIn', 'rotation', 'rotation2', 'translateX'];

    //declaration of some repetititve variables
    var input = document.getElementById('mypcInput')


    document.querySelector('.pcAppsWindow').style.animation = `${animations[Math.floor(Math.random()*animations.length)]}  .5s`;

    document.querySelector('.pcAppsWindow').style.display = 'block';
   
    /*
      the filterAppsMyPc function filter everytime the apps by displaying 
      the apps with the value from -input- variable ~ document.getElementById('mypcInput')
      
    */
    function sortElements(displayBlock){
      document.querySelectorAll('.mypcAppsWindowIcon ').forEach((e) => { e.style.display = 'none'; } )
      document.querySelectorAll('.' + displayBlock).forEach((e) => { e.style.display = 'block'; } )
      input.value = displayBlock.replaceAll('_', '/')
        
    }

    document.querySelectorAll('.mypcAppsWindowIcon').forEach((e) =>{
    e.classList.add(globalList[count]); count++;
    })
    input.value = "ProgramFiles"
    document.querySelector('.mypcAppsWindow').querySelectorAll('.ProgramFiles').forEach((e) => { e.style.display = 'block'; })

    /*
      fetch from json the 
    */
    document.querySelector('.chelutzuFolder').ondblclick = function(){sortElements('ProgramFiles_chelutzu')}
    document.querySelector('.chelutzu_assets').ondblclick = function(){sortElements('ProgramFiles_chelutzu_assets')}

    //images
    /**
     
    document.querySelector('.ciordeala').onclick = function(){
      console.log('ceva')
      document.querySelector('.ciordeala').setAttribute('href', 'chelutzu/assets/ciordeala.jpg')
    }
     */

    //Here are the buttons and the functions they execute from MyPc 
    document.querySelector('.goButton').addEventListener('click', (event) => sortElements(input.value.replaceAll('/', '_')));
    document.querySelector('.homeButton').addEventListener('click', (event) => {
      input.value = 'ProgramFiles'; 
      //get the value from input and filter the apps by displaying 
      sortElements(input.value.replaceAll('/', '_'));
    });
    document.getElementById('mypcInput').addEventListener('keypress', function(event){
        if( event.key === 'Enter' ) sortElements(input.value.replaceAll('/', '_'));
    })
};

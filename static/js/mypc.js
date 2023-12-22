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

    //declaration of some repetititve variables
    var input = document.getElementById('mypcInput')

    //Everytime when it will be an Enter tappen when you are writing in input, 
    //it will display the apps from that dir
    document.getElementById('mypcInput').addEventListener('keypress', function(event){
    if( event.key === 'Enter' ) sortElements(input.value.replaceAll('/', '_'));
    })

    //aniamtions when displaying the window
    const animations = ['fadeIn', 'rotation', 'rotation2', 'translateX'];
    document.querySelector('.pcAppsWindow').style.animation = `${animations[Math.floor(Math.random()*animations.length)]}  .5s`;
    document.querySelector('.pcAppsWindow').style.display = 'block';
   
    /*
      the sortElements function filter everytime the apps by displaying 
      the apps with the value from -input- variable ~ document.getElementById('mypcInput').
      You will notice that this function is used only in this form : sortElements(input.value.replaceAll('/', '_'))
      that is because JSON don't allow '/' character, so the dirs were written with '_' and replaced

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
   
    //Here are the buttons and the functions they execute from MyPc 
    //{
      document.querySelector('.goButton').addEventListener('click', () => sortElements(input.value.replaceAll('/', '_')));
      document.querySelector('.homeButton').addEventListener('click', () => {
        input.value = 'ProgramFiles'; 
        //get the value from input and filter the apps by displaying 
        sortElements(input.value.replaceAll('/', '_'));
      });
      document.querySelector('.backButton').addEventListener('click', () => {

        /*
          the main dir is ProgramFiles, so if the value of input is equal 
          to ProgramFiles it will return nothing, else will delete the last 
          '/' and app/element from the dir
         */

        if(input.value == 'ProgramFiles') return

        else{
          var listOfChars = input.value.split("")
          var lipsa = ''; var count = 0; var count2 = 0;
  
          for(let i = 0; i < listOfChars.length; i++)
            if (listOfChars[i] == '/' ) 
              count++;
  
          for(let i = 0; i < listOfChars.length; i++){
              lipsa += listOfChars[i]; 
              if( listOfChars[i] == '/') count2++;
              if (count2 == count ) break;
            }
        }
       
        console.log(lipsa, lipsa.slice(0, -1))
      input.value = lipsa.slice(0, -1); sortElements(input.value.replaceAll('/', '_'));
    //}

    })

};

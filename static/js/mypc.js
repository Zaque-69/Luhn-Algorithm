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
    document.querySelector('.pcAppsWindow').style.display = 'block';
   
    function sortElements(displayBlock, displayNone){
        document.querySelectorAll(displayBlock).forEach((e) => { e.style.display = 'block'; } )
        document.querySelectorAll(displayNone).forEach((e) => { e.style.display = 'none'; } )
    }

    document.querySelectorAll('.mypcAppsWindowIcon').forEach((e) =>{
    e.classList.add(globalList[count]); count++;
    })

    document.querySelector('.mypcAppsWindow').querySelectorAll('.Program_Files').forEach((e) => { e.style.display = 'block'; })

    document.querySelector('.chelutzuFolder').ondblclick = function(){sortElements('.Program_Files_chelutzu', '.Program_Files')}



    //input
    document.getElementById('mypcInput').addEventListener('keypress', function(event){
        if( event.key === 'Enter' ) sortElements
    })
};
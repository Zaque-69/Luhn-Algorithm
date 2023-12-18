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
  //inner in input 
    //document.getElementById('mypcInput').value = 'C:/'


    document.querySelector('.pcAppsWindow').style.display = 'block';
   
    function sortElements(displayBlock){
      document.querySelectorAll('.mypcAppsWindowIcon ').forEach((e) => { e.style.display = 'none'; } )
      document.querySelectorAll('.' + displayBlock).forEach((e) => { e.style.display = 'block'; } )
      document.getElementById('mypcInput').value = displayBlock.replaceAll('_', '/')
        
    }

    document.querySelectorAll('.mypcAppsWindowIcon').forEach((e) =>{
    e.classList.add(globalList[count]); count++;
    })
    document.getElementById('mypcInput').value = "ProgramFiles"
    document.querySelector('.mypcAppsWindow').querySelectorAll('.ProgramFiles').forEach((e) => { e.style.display = 'block'; })

    //folders
    document.querySelector('.chelutzuFolder').ondblclick = function(){sortElements('ProgramFiles_chelutzu')}
    document.querySelector('.chelutzu_assets').ondblclick = function(){sortElements('ProgramFiles_chelutzu_assets')}

    //images
    document.querySelector('.ciordeala').onclick = function(){
      console.log('ceva')
      document.querySelector('.ciordeala').setAttribute('href', 'chelutzu/assets/ciordeala.jpg')
    }

    document.getElementById('mypcInput').addEventListener('keypress', function(event){
        if( event.key === 'Enter' ) {
          let IDval = document.getElementById('mypcInput').value.replaceAll('/', '_');
          sortElements(IDval);
        }
    })
};
console.log('acacacac'.replaceAll('a', 'f'))

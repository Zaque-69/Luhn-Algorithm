document.querySelectorAll('.pressImg').forEach((e) => {e.style.display = 'none'})
document.querySelectorAll('.case').forEach((e) => {e.style.display = 'block'})

listOfComponents = ['case', 'gpu', 'cpu']
listOFElements = ['case1', 'case2', 'gpu1', 'gpu2', 'gpu3', 'gpu4']; 
count = 0;

//json
js = {
    "case1" : {
        "val" : "case2",
        "elementToFit" : "postCase",
        "from" : "case"
    },
    "case2" : {
        "val" : "case4",
        "elementToFit" : "postCase",
        "from" : "case"
    },
    "gpu1" : {
        "val" : "1050ti",
        "elementToFit" : "postGpu",
        "from" : "gpu"
    },
    "gpu2" : {
        "val" : "3090",
        "elementToFit" : "postGpu",
        "from" : "gpu"
    },
    "gpu3" : {
        "val" : "gtx750",
        "elementToFit" : "postGpu",
        "from" : "gpu"
    },
    "gpu4" : {
        "val" : "msi1650gtx",
        "elementToFit" : "postGpu",
        "from" : "gpu"
    },
}

function main(whereFit, selectedElement, val){
    document.querySelector(`.${whereFit}`).setAttribute('src', `assets/${selectedElement}/${val}.png`)
}

document.querySelector('button').addEventListener('click', function(){
    document.querySelectorAll("." + listOfComponents[count]).forEach((e) => {
        e.remove();
    }); 
    count++;
    document.querySelectorAll("." + listOfComponents[count]).forEach((e) => {
        e.style.display = "block";
    }); 
})

//setting body width and height by screen / iframe 
document.querySelector('body').style.height = window.innerHeight + 'px';
document.querySelector('body').style.width = window.innerWidth + 'px';


for (let i = 0; i <= listOFElements.length; i++ ){
    //eval(`js.${listOFElements[i]}`).val
    document.querySelector('.' + listOFElements[i] ).addEventListener('click', function(){

        let el2Fit = eval(`js.${listOFElements[i]}`).elementToFit;
        let value = eval(`js.${listOFElements[i]}`).val;
        let fr = eval(`js.${listOFElements[i]}`).from;

        main(el2Fit, fr, value);
    }) 
}



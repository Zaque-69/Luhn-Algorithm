const gameContainer = document.querySelector(".container")
const userResult = document.querySelector(".user-result img")
const computerResult = document.querySelector(".computer-result img")
const result = document.querySelector(".result")
const optionImages = document.querySelectorAll(".option-image")

function reload(ms){
    setTimeout(() => {
        window.location.reload()
    }, ms)
}

function showVideo(videoPath, time) {
    document.querySelector(".deleteBeforeVideo").style.display = "none";
    var video = document.createElement("video");
    
    var source = document.createElement("source");
    source.src = videoPath;
    source.type = "video/mp4";
    video.appendChild(source);
    
    video.autoplay = true;
    video.muted = false;  
    video.controls = true;
    
    document.querySelector(".result-spot").appendChild(video);

    reload(time)
}

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        optionImages.forEach((image2, index2) =>{
            index !== index2 && image2.classList.remove("active");
        });

            gameContainer.classList.add("start");
            userResult.src = computerResult.src = "static/images/katalin.png";
            result.textContent = "Asteapta";

            setTimeout(() =>{
                gameContainer.classList.remove("start");
                let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNumber = Math.floor(Math.random() * 3);
            let compImages = [
                "static/images/bomba.png",
                "static/images/racheta.png",
                "static/images/tsunami.png"];

            let compValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];

            computerResult.src = compImages[randomNumber];

            let outcomes = {
                RR: "Draw",
                RP: "Calculatorul",
                RS: "Katalin",
                PP: "Draw",
                PR: "Katalin",
                PS: "Calculatorul",
                SS: "Draw",
                SR: "Calculatorul",
                SP: "Katalin",
            };
            let outComeValue = outcomes[userValue + compValue];
            result.textContent = userValue === compValue ? "Egal" : `${outComeValue} a castigat!`;

            setTimeout(() =>{
                switch(document.querySelector(".result").innerText) {
                    case "Katalin a castigat!" : 
                        switch(compValue) {
                            case "R" : 
                                showVideo("static/video/racheta.mp4", 8000);
                                break;
                            case "P" : 
                                showVideo("static/video/tsunami.mp4", 6000);
                                break;
                            case "S" :
                                showVideo("static/video/bomba.mp4", 8000); 
                                break;
                            }
                        break;
                    case "Egal" : 
                        showVideo("static/video/egal.mp4", 5000);
                        break;
                    case "Calculatorul a castigat!" : 
                        showVideo("static/video/pierdut.mp4", 8000);    
                        break;
                }
            }, 1000)
        },2500)

    });
});

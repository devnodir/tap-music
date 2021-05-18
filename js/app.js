window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "rgb(101, 221, 165)",
        "rgb(69, 182, 219)",
        "lawngreen",
        "indigo",
        "red",
        "#ffeb3b"

    ]

    console.log(sounds);

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    //Function for bubbles

    function createBubbles(index) {
        var bubbles = document.createElement("div");
        visual.appendChild(bubbles);
        bubbles.style.backgroundColor = colors[index];
        bubbles.style.animation = 'jump 1s ease';
        bubbles.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    }
});
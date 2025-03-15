let num = 16;
let size = num*num;

function boxMaker() {
    const container = document.querySelector(".container")

    //clear previous boxes in case user re runs it
    container.innerHTML = '';

    //dynamically setting the size of grids and boxes so that a perfect grid appears
    const boxSize = 24;
    const gap = 3;
    const containerSize = (num*boxSize)+((num-1)*gap);
    container.style.width = `${containerSize}px`;
    container.style.height = `${containerSize}px`;

    //loop for making boxes
    for(let i = 0; i<size; i++){
    const div = document.createElement("div");
    div.classList.add("box")

    //hover effect
    div.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        div.style.background = `rgb(${r}, ${g}, ${b})`;
    })

    container.appendChild(div);
    }
}

boxMaker();
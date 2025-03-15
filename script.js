let defaultSize = 16;
const max_size = 100;
const container = document.querySelector(".container")
const button = document.querySelector("#new-grid-btn")

function boxMaker(num) {

    //clear previous boxes in case user re runs it
    container.innerHTML = '';

    //dynamically setting the size of grids and boxes so that a perfect grid appears
    const totalSize = 960; //total width/heigh
    const boxSize = totalSize/num
    container.style.width = `${totalSize}px`;
    container.style.height = `${totalSize}px`;

    //loop for making boxes
    for(let i = 0; i<num*num; i++){
    const div = document.createElement("div");
    div.classList.add("box")

    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;

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

button.addEventListener("click", () => {
    let input = prompt("Enter the number of squares per side (max 100):");
    let num = parseInt(input);

    if (isNaN(num) || num < 1 || num > max_size) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    boxMaker(num);
});

boxMaker(defaultSize);

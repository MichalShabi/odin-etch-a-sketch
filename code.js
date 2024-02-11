

function makeGrid(size) {

    let divContainer = document.querySelector("#div-container");
    console.log(divContainer.id)
    
    divContainer.innerHTML = ""
    for (let i = 0; i < size; i++) {
        let column = document.createElement("div");
        // divSquere.setAttribute("id", "cou");
        column.classList.add("column")
        for (let j = 0; j < size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.addEventListener("mouseover", () => {
                row.classList.add("colored");
            })
            column.appendChild(row);
            // row.innerText = (i * size) + j;
            
        }
        divContainer.appendChild(column);
        
    }
}

function startGame() {
    let size = prompt("choose the number of squares per side (max 100)");
    if(size > 100) {
        alert("you need to enter a value bigger than 0 smaller than 100")
    }
    if(size !== null && size <= 100) {
        makeGrid(size);
    }
}





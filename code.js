

function makeGrid(size) {

    let divContainer = document.querySelector("#div-container");
    console.log(divContainer.id)
    
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
            row.style.border = "2px solid black";
            column.appendChild(row);
            // row.innerText = (i * size) + j;
            
        }
        divContainer.appendChild(column);
        
    }
}



makeGrid(16);


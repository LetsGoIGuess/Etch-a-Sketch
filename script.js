function makeGrid(numba){

    console.log("grid created")

    for(let row = 0; row < numba; row++){

        for(col = 0; col < numba; col++){
    
            let total = 100/numba;
    
            let div = document.createElement("div");
            div.className = "div-box";
            div.style.width = `${total}%`;
            div.style.height = "50px";
            div.style.outline = "1px solid";
            div.style.boxSizing = "border-box";
            div.style.display = "inline-block";
            div.style.marginBottom = "-3px";
    
            let main = document.querySelector(".main-container");
    
            main.appendChild(div);
            
        }
    }

    changeColor();
}

function changeColor(){
    let boxOver = document.querySelectorAll(".div-box");
    

    for(let mouse of boxOver){
        mouse.addEventListener('mouseover',function(){
            mouse.style.backgroundColor = "black";
            mouse.style.outlineColor = "white";
        })
    }
}


function removeGrid(){

    let b = document.querySelectorAll(".div-box");


    for(let mouse of b){
        mouse.style.display = "none";
    }
}


function play(){

    let changeSize = document.querySelector("button");

    changeSize.addEventListener('click',function(){
        let size = prompt("What size would you like the grid to be? | RANGES ONLY 1 AND 100 ACCEPTED!");
    
        if(size < 1 || size > 100){
            alert("Invalid Input! Try Again");
        }
    
        else{
            removeGrid();
            makeGrid(size);
            console.log(size);
        }
    })
}


makeGrid(16);
play();
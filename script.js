function makeGrid(numba){

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
}


makeGrid(16);



let d = document.querySelectorAll(".div-box");


for(let dem of d){
    dem.addEventListener('mouseover',function(){
        dem.style.backgroundColor = "black";

        dem.style.outlineColor = "white";
    })
}










const calc_screen = document.getElementById("calc-screen-html"); 

const num = document.createElement("p");
const node = document.createTextNode("");
num.appendChild(node);

function processInput(input) {
    var z = document.createElement('p');  
    // input = input + input;
    z.innerHTML = input;
    console.log(input)
    calc_screen.appendChild(z);

    
}

function btnclicked(input) {
    console.log(input  + " clicked")
    // var z = document.createElement('p');  
    // z.innerHTML = String(numClicked);
    // calc_screen.appendChild(z);
    processInput(input);
}

// let buttonList = document.querySelectorAll("button");

// const round = 0;
// // var z = document.createElement('p');  
// buttonList.forEach(function(i){
   
//     i.addEventListener("click", function(e){
//         const input = "";
//         input = e.target.value;
//         processInput(input)
//     }
//     )

//   })



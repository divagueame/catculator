var displayText = "";
var displayValue = 0;
var lastNumberMatch = /[^/*+-]+$/

//CREATE THE MAINDIV,the display and the NUMBER PAD
const calculatorDiv = document.querySelector(".calculatorDiv");
var selectDisplay = document.querySelector(".operationDisplay");
calculatorDiv.style.width = "370px";
calculatorDiv.style.margin = "auto";
calculatorDiv.style.marginTop = "70px";



///////////// NUMBERS GRID
const mainD = document.querySelector(".mainDiv");
mainD.style.display = "grid";
mainD.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"; 
mainD.style.gridTemplateRows = " 1fr 1fr 1fr 1fr";
mainD.style.gridGap = "0.3rem";
mainD.style.justifyContent = "end"

//CREATE THE NUMKEYS
const numberKeys = [7,8,9,4,5,6,1,2,3,0, "clear", "equal", "add", "sus", "multiply", "divide", ".", "DEL"]
function setNumbersKeys(x) {
    x.forEach((element) => {
        let newId = document.createElement("div")
        newId.classList = "button" + element;  // ADDS CLASSES AND STYLES THE NUMBER AND OPERATION BUTTONS
        newId.classList += " button";
        newId.textContent = element;
        newId.setAttribute = "data-value='2'";

        newId.style.boxSizing = "border-box";
        newId.style.border = "3px black solid";
        newId.style.borderRadius = "5px"
        newId.style.padding = "10px";
        newId.style.display = "flex";
        newId.style.justifyContent = "center";
        newId.style.alignItems = "center";
        newId.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
        newId.style.fontWeight = "bold";
        newId.addEventListener('click', function(){
            
       // console.log(typeof element)
        if ((typeof element == "number") && (element != 0)){ // NUMEROS
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += element.toString();
            } else {
                selectDisplay.textContent = element.toString();
            }
        }
        if ((element == 0) && (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))) || (selectDisplay.textContent.charAt(selectDisplay.textContent.length-1) == ".")){
            selectDisplay.textContent += "0";
        }
        if (element == "clear"){
            selectDisplay.textContent = "";
        } 
        if (element == "add"){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent += "+";
            }
        } 
        if (element == "sus"){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
            selectDisplay.textContent += "-";
        }
        } 
        if (element == "multiply"){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent += "*";
            }
        } 
        if (element == "divide"){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent += "/";
            }
        } 
        if (element == "."){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))  && (selectDisplay.textContent.match(lastNumberMatch).toString().indexOf(".") == "-1")){
                selectDisplay.textContent += ".";
            }
        }
        if (element == "equal"){
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent = getResult(selectDisplay.textContent)
            }
        }
        if (element == "DEL"){
                if (selectDisplay.textContent.charAt(selectDisplay.textContent.length-1) == "0"){ // I don't understand why the "." is registered as 0
                    selectDisplay.textContent = selectDisplay.textContent.toString().substr(0,selectDisplay.textContent.length-1)
                    }
                if (selectDisplay.textContent != "Cat-culate!"){
                    selectDisplay.textContent = selectDisplay.textContent.toString().substr(0,selectDisplay.textContent.length-1)
            }   
        }
})






  
///////////////////////////////////GRID ITEMS POSITION
        if (newId.classList.contains( "buttonequal")){ // DISPLAYS BUTTONS ON THE GRID
            newId.textContent = "="
            newId.style.gridColumnStart = "3";
            newId.style.gridColumnEnd = "4";
            newId.style.gridRowStart = "4";
            newId.style.gridRowEnd = "5";
        }
        if (newId.classList.contains( "button.")){
            newId.textContent = "."
            newId.style.gridColumnStart = "2";
            newId.style.gridColumnEnd = "3";
            newId.style.gridRowStart = "4";
            newId.style.gridRowEnd = "5";
        }
        if (newId.classList.contains( "buttonadd")){
            newId.textContent = "+"
            newId.style.gridColumnStart = "4";
            newId.style.gridColumnEnd = "5";
            newId.style.gridRowStart = "4";
            newId.style.gridRowEnd = "5";
        }
        if (newId.classList.contains( "buttonsus")){
            newId.textContent = "-"
            newId.style.gridColumnStart = "4";
            newId.style.gridColumnEnd = "5";
            newId.style.gridRowStart = "3";
            newId.style.gridRowEnd = "4";
        }
        if (newId.classList.contains( "buttondivide")){
            newId.textContent = "÷"
            newId.style.gridColumnStart = "4";
            newId.style.gridColumnEnd = "5";
            newId.style.gridRowStart = "1";
            newId.style.gridRowEnd = "2";
        }
        if (newId.classList.contains( "buttonmultiply")){
            newId.textContent = "x"
            newId.style.gridColumnStart = "4";
            newId.style.gridColumnEnd = "5";
            newId.style.gridRowStart = "2";
            newId.style.gridRowEnd = "3";
        }
        mainD.appendChild(newId)
    });
}

// Create Display Div
function setDisplay(){
    var newId = document.createElement("div")
    newId.classList = "operationDisplay";
    newId.style.backgroundColor = "rgba(255, 255, 255, 0.45)"
    newId.textContent = "Cat-culate!";
    newId.style.fontSize = "1.6em"
    newId.style.boxSizing = "border-box"
    newId.style.height = "55px"
    newId.style.border = "3px black solid";
    newId.style.padding = "10px";
    newId.style.paddingRight = "15px";
    newId.style.paddingTop = "10px";
    newId.style.marginBottom = "30px";  
    newId.style.display = "flex";
    newId.style.justifyContent = "right";
    newId.style.borderRadius = "5px"
    mainD.insertAdjacentElement('beforebegin', newId)
}



setNumbersKeys(numberKeys);
setDisplay();
var selectDisplay = document.querySelector(".operationDisplay")


//DELETE IF IT WORKS PROPERLY March 25th
// function changeDisplay(disp, val){ //takes displayText and displayValue as arguments
//     selectDisplay.textContent += disp;
// }
// changeDisplay(displayText,displayValue)




// BUTTON BEHAVIOUR
document.onkeypress = function (e) {
e = e || window.event;
console.log(e.key)
    switch(e.keyCode){
        case 49:     // Key 1
        if (selectDisplay.textContent != "Cat-culate!"){
            selectDisplay.textContent += e.key.toString();
        } else {
            selectDisplay.textContent = e.key.toString();
            
        }
        break;

        case 50:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 51:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 52:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 53:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 54:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 55:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 56:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 57:
            if (selectDisplay.textContent != "Cat-culate!"){
                selectDisplay.textContent += e.key.toString();
            } else {
                selectDisplay.textContent = e.key.toString();
                
            }
        break;

        case 48: // Key 0
            if (selectDisplay.textContent != "Cat-culate!") {
                selectDisplay.textContent += e.key.toString();
            } else {
       
                
            }
        break;
        case 43: // KEY +
        if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
            selectDisplay.textContent += "+";
        }
        break;
        case 45:  // KEY -
        if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
            selectDisplay.textContent += "-";
        }
        break;
        case 46:  // KEY .
        if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))  && (selectDisplay.textContent.match(lastNumberMatch).toString().indexOf(".") == "-1")){
            selectDisplay.textContent += ".";
        }
        break;
        case (42 || 120): // ***
        if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
            selectDisplay.textContent += "*";
        }
        break;
        case (47 || 248):  //   /
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent += "/";
            }
        break;
        case (61) || (13): // =
            if (!isNaN(parseInt(selectDisplay.textContent.charAt(selectDisplay.textContent.length-1)))){
                selectDisplay.textContent = getResult(selectDisplay.textContent);
            }
        break;
        default: 
        console.log(e.keyCode)
    }
    
};


function getResult(str){

    var nums = [];
    var sims = [];
    var simbolsNums = /[/\-\+\-\*/]/
    var simbolsSims = /[\d]+/

nums = str.split(simbolsNums).map(function(x){return Number(x)});
sims = str.split(simbolsSims).filter(function(x){if ((x != "") && (x != ".")){return x}});


for (var i = 0; i<sims.length;i++){
    if ((sims[i] == "*" ) || (sims[i] == "/" )){
        if (sims[i] == "*" ){
            nums[i+1] = nums[i+1]*nums[i];
            sims.splice(i,1);
            nums.splice(i,1);
            i--
        }
        if (sims[i] == "/" ) {
            nums[i+1] = nums[i]/nums[i+1];
            sims.splice(i,1);
            nums.splice(i,1);
            i--
        }
    }
}

for (var i = 0; i<sims.length;i++){
    if ((sims[i] == "+" ) || (sims[i] == "-" )){
        if (sims[i] == "+" ){
            nums[i+1] = (nums[i+1])+(nums[i]);
            nums[i+1] = (nums[i+1]) 
            sims.splice(i,1);
            nums.splice(i,1);
            i--
        }
        if (sims[i] == "-" ) {
            nums[i+1] = nums[i]-nums[i+1];
            sims.splice(i,1);
            nums.splice(i,1);
            i--
        }
    }
}

 nums = nums[0];
 if (!Number.isInteger(nums)){
    nums = nums.toFixed(2)
 }
 

 console.log(nums);
 nums = nums.toString()

return nums
}
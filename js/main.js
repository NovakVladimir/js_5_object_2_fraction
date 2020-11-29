/*
This funciton remove all child-elements from some parent-element. Its argument is id of parent element.
*/

function deleteOutput(container) {
    let myNode = document.getElementById(container);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}

/**
 * This functioninsert some element to the parent-element. Its arguments are: 1 - id of parent element; 
 * 2 -  something we want to insert in this parent-element.
 */
function insertOutput(idOutput, toOutput) {
        let container = document.getElementById("container");
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${toOutput}</p>`);
    }

/*
This function get value from <input> and translate it from text value to digital. Its argument is id of <input>
*/
function getInput(idInput) {
    let inputValue_1 = document.getElementById(idInput).value;
    return inputValue_1;
}


/**
 * Second task
 */
/**
 * This function checks input, and if it is empty or has fraction the function show the message about this for users.
 */
function ifEmptyInput(ifIEmpty) {
    if((ifIEmpty === undefined) || (ifIEmpty === null) || (ifIEmpty === "")) {
        alert(`Please, fill in all fields`);
        return true;
    }
    if(ifIEmpty != Math.floor(ifIEmpty)) {
        alert(`Numbers must be without fraction`);
        return true;
    }
}

 function checkInput(myNumerator, myDenominator) {
    let container = document.getElementById('container');
    if(ifEmptyInput(myNumerator) || ifEmptyInput(myDenominator)) {
        return true;
    }
    if(myDenominator == 0) {
        alert("Denominator can not be 0");
        return true;
    }
 }

 function shortenObj(myNumerator, myDenominator) {
    let biggestDivider = 1; 
    for(let i = 2; i <= myNumerator; i++) {
         if((myNumerator % i === 0) && (myDenominator % i === 0)) {
             biggestDivider = i;
         }
     }
     return biggestDivider;
 }

 class fractions {
    constructor(_numerator, _denominator, _container) {
        this.numerator = _numerator/shortenObj(_numerator, _denominator);
        this.denominator = _denominator/shortenObj(_numerator, _denominator);
        this.container = _container;
    }
    output() {
        let container = document.getElementById(`${this.container}`);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        container.insertAdjacentHTML('beforeend', `<p class="outputResult">${this.numerator} / ${this.denominator}</p>`);
    }
}

 function createFirstTwoObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2) {
    let firstObj = new fractions(myNumerator_1, myDenominator_1, "container");
    let secondObj = new fractions(myNumerator_2, myDenominator_2, "container_2");
    firstObj.output();
    secondObj.output();
 }

 function multipleObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2) {
    if(checkInput(myNumerator_1, myDenominator_1) || checkInput( myNumerator_2, myDenominator_2)) {
        deleteOutput("container");
        deleteOutput("container_2");
        deleteOutput("container_3");
        return;}
    createFirstTwoObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2);
    let resultObj = new fractions(myNumerator_1 * myNumerator_2, myDenominator_1 * myDenominator_2, "container_3");
    resultObj.output();
 }

 function divideObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2) {
    if(checkInput(myNumerator_1, myDenominator_1) || checkInput( myNumerator_2, myDenominator_2)) {
        deleteOutput("container");
        deleteOutput("container_2");
        deleteOutput("container_3");
        return;}
    createFirstTwoObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2);
    let resultObj = new fractions(myNumerator_1 * myDenominator_2, myDenominator_1 * myNumerator_2, "container_3");
    resultObj.output();
 }

 function addObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2) {
    if(checkInput(myNumerator_1, myDenominator_1) || checkInput( myNumerator_2, myDenominator_2)) {
        deleteOutput("container");
        deleteOutput("container_2");
        deleteOutput("container_3");
        return;}
    createFirstTwoObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2);
    let resultObj = new fractions(myNumerator_1 * myDenominator_2 + myNumerator_2 * myDenominator_1, myDenominator_1 * myDenominator_2, "container_3");
    resultObj.output();
 }

 function subtractObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2) {
    if(checkInput(myNumerator_1, myDenominator_1) || checkInput( myNumerator_2, myDenominator_2)) {
        deleteOutput("container");
        deleteOutput("container_2");
        deleteOutput("container_3");
        return;}
    createFirstTwoObj(myNumerator_1, myDenominator_1, myNumerator_2, myDenominator_2);
    let resultObj = new fractions(myNumerator_1 * myDenominator_2 - myNumerator_2 * myDenominator_1, myDenominator_1 * myDenominator_2, "container_3");
    resultObj.output();
 }








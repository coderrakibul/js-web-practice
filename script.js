let count = 0;

function addNumber(){
    count = count + 1;
    numberControl(count);

}

function minusNumber(){
    count = count - 1;
    numberControl(count);
}

function numberControl(){
    document.getElementById("output-number").innerText = count;
}
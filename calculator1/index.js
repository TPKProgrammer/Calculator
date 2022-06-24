
let Output = document.getElementById("output-screen");

function display(num) {
    Output.value += num;
}

function calculate(){
    try{
        Output.value = eval(Output.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}

function Clear(){
    Output.value = "";
}

function Del(){
    Output.value = Output.value.slice(0,-1);
}
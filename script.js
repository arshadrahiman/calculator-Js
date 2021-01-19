function btnclick(val) {
    document.getElementById("screen").value += val;
    console.log(val)
}

function clearf() {
    document.getElementById("screen").value = ""
}

function equalclick() {
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result

}
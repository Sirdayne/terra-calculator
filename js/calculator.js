var counter = 0;
var btnCalculator = document.getElementById('btn-calculator')

btnCalculator.onclick = function(e) {
    counter++
    console.log(counter)
    output.innerHTML = counter
}
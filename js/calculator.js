var sum = 0
iconAsks = document.getElementsByClassName('icon-ask')

btnCalculator.onclick = function(e) {
    sum = parseInt(inputSowingArea.value) + 
    parseInt(inputRealizationTonne.value) +
    parseInt(inputHeads.value) +
    parseInt(inputVehicles.value) +
    parseInt(inputElectronic.value) +
    parseInt(inputVolumeElevator.value) +
    parseInt(inputAverageYield.value) +
    parseInt(inputAverageRefaction.value) +
    parseInt(inputAverageNadoiPrives.value) +
    parseInt(inputAverageRealizationMeatMilk.value)
    console.log(sum)
    output.innerHTML = sum ? sum : 'данные не заполнены' 
}

var OFFSET = 5
var x = 0
var y = 0

for (var i = 0; i < iconAsks.length; i++) {
    iconAsks[i].onmouseover = function(e) {
        mouseTooltip.innerHTML = this.innerHTML
        mouseTooltip.style.display = 'block'
        x = e.pageY + OFFSET
        y = e.pageX + OFFSET 
        mouseTooltip.style.transform = 'translate(' + y + 'px,' + x + 'px)'
    }
    iconAsks[i].onmouseout = function(e) {
        mouseTooltip.innerHTML = ''
        mouseTooltip.style.display = 'none'
    }
}
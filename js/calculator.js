var sum = 0
var sumIncomeAnimal = 0
var sumIncomePlant = 0
var sumIncomeHuman = 0
var sumIncomeThief = 0
var sumTotalIncome = 0

var valSowingArea = 0
var valRealizationTonne = 0
var valHeads = 0
var valVehicles = 0
var valElectronic = 0
var valVolumeElevator = 0
var valAverageYield = 0
var valAverageRefaction = 0
var valAverageNadoi = 0
var valAverageRealization = 0

var valCameras = 0
var valAverageTMC = 0
var valThiefSeason = 0
var valPercentTMCSeason = 0
var valVacancies = 0
var valVacanciesMonth = 0
var valPercentNotEffectiveTMC = 0
var valDesireElectronic = 0
var valDesireWater = 0
var valDesireRashod = 0
var valPercentYield = 0
var valPercentNadoi = 0
var valPercentRefaction = 0
var valPercentTMC = 0 

var iconAsks = document.getElementsByClassName('icon-ask')

function setDataInputs() {
    var inputs = document.getElementsByTagName('input')
    for (var j = 0; j < inputs.length; j++){
        inputs[j].value = j
    }
}

function getDataInputs() {
    valSowingArea = parseInt(inputSowingArea.value)
    valRealizationTonne = parseInt(inputRealizationTonne.value)
    valHeads = parseInt(inputHeads.value)
    valVehicles = parseInt(inputVehicles.value)
    valElectronic = parseInt(inputElectronic.value)
    valVolumeElevator = parseInt(inputVolumeElevator.value)
    valAverageYield = parseInt(inputAverageYield.value)
    valAverageRefaction = parseInt(inputAverageRefaction.value)
    valAverageNadoi = parseInt(inputAverageNadoi.value)
    valAverageRealization = parseInt(inputAverageRealization.value)

    valCameras = parseInt(inputCameras.value)
    valAverageTMC = parseInt(inputAverageTMC.value)
    valThiefSeason = parseInt(inputThiefSeason.value)
    valPercentTMCSeason = parseInt(inputPercentTMCSeason.value)
    valVacancies = parseInt(inputVacancies.value) 
    valVacanciesMonth = parseInt(inputVacanciesMonth.value) 
    valPercentNotEffectiveTMC = parseInt(inputPercentNotEffectiveTMC.value) 
    valDesireElectronic = parseInt(inputDesireElectronic.value) 
    valDesireWater = parseInt(inputDesireWater.value) 
    valDesireRashod = parseInt(inputDesireRashod.value) 
    valPercentYield = parseInt(inputPercentYield.value) 
    valPercentNadoi = parseInt(inputPercentNadoi.value) 
    valPercentRefaction = parseInt(inputPercentRefaction.value) 
    valPercentTMC = parseInt(inputPercentTMC.value) 
}

function setIncomeHTML(tag, sum) {
    tag.innerHTML = sum ? sum + ' тг.' : 'данные не заполнены'
}

btnCalculator.onclick = function(e) {
    setDataInputs()
    getDataInputs()
    sum = valSowingArea + valPercentTMC
    capitalCost.innerHTML = sum ? sum + ' тг.' : 'данные не заполнены' 

    sumIncomeAnimal = valHeads * valAverageNadoi * valAverageRealization * valPercentNadoi
    setIncomeHTML(incomeAnimal, sumIncomeAnimal)

    sumIncomePlant = valAverageYield * valPercentYield * valSowingArea / 10 * valRealizationTonne + (valAverageYield + valAverageYield * valPercentYield * valSowingArea / 10) * valAverageRefaction * valPercentRefaction * valRealizationTonne + valAverageTMC * valPercentTMC * valSowingArea 
    setIncomeHTML(incomePlant, sumIncomePlant)
    
    sumIncomeHuman = valVacanciesMonth * 12 * valVacancies + valAverageTMC * valPercentNotEffectiveTMC * valSowingArea
    setIncomeHTML(incomeHuman, sumIncomeHuman)
    
    sumIncomeThief = valThiefSeason * 35 * valRealizationTonne + valAverageTMC * valPercentTMCSeason * valSowingArea
    setIncomeHTML(incomeThief, sumIncomeThief)

    sumTotalIncome = sumIncomeAnimal + sumIncomeHuman + sumIncomePlant + sumIncomeThief 
    setIncomeHTML(incomeTotal, sumTotalIncome)
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
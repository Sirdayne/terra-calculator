/* DATA */

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

var boolGPS = 0

var sum = 0
var sumIncomeAnimal = 0
var sumIncomePlant = 0
var sumIncomeHuman = 0
var sumIncomeThief = 0
var sumTotalIncome = 0

var sumMultiGPS = 0

var iconAsks = document.getElementsByClassName('icon-ask')

function getDataInputs() {
    valSowingArea = parseValue(inputSowingArea)
    valRealizationTonne = parseValue(inputRealizationTonne)
    valHeads = parseValue(inputHeads)
    valVehicles = parseValue(inputVehicles)
    valElectronic = parseValue(inputElectronic)
    valVolumeElevator = parseValue(inputVolumeElevator)
    valAverageYield = parseValue(inputAverageYield)
    valAverageRefaction = parseValue(inputAverageRefaction)
    valAverageNadoi = parseValue(inputAverageNadoi)
    valAverageRealization = parseValue(inputAverageRealization)

    valCameras = parseValue(inputCameras)
    valAverageTMC = parseValue(inputAverageTMC)
    valThiefSeason = parseValue(inputThiefSeason)
    valPercentTMCSeason = parseValue(inputPercentTMCSeason)
    valVacancies = parseValue(inputVacancies) 
    valVacanciesMonth = parseValue(inputVacanciesMonth) 
    valPercentNotEffectiveTMC = parseValue(inputPercentNotEffectiveTMC) 
    valDesireElectronic = parseValue(inputDesireElectronic) 
    valDesireWater = parseValue(inputDesireWater) 
    valDesireRashod = parseValue(inputDesireRashod) 
    valPercentYield = parseValue(inputPercentYield) 
    valPercentNadoi = parseValue(inputPercentNadoi) 
    valPercentRefaction = parseValue(inputPercentRefaction) 
    valPercentTMC = parseValue(inputPercentTMC) 

    boolGPS = parseBool(checkGPS)
}

function setDataInputs() {
    var inputs = document.getElementsByTagName('input')
    for (var j = 0; j < inputs.length; j++){
        if (inputs[j].type === 'number'){
            inputs[j].value = j
        } else {
            inputs[j].checked = true
        }
    }
}

function parseValue(tag) {
    return parseInt(tag.value)
}

function parseBool(tag) {
    return tag.checked
}

function setHTML(tag, sum) {
    tag.innerHTML = sum ? sum + ' тг.' : 'нет данных'
}

/* EVENTS */

btnCalculator.onclick = function(e) {
    setDataInputs()
    getDataInputs()

    sum = valSowingArea + valPercentTMC
    setHTML(capitalCost, sum)

    sumIncomeAnimal = valHeads * valAverageNadoi * valAverageRealization * valPercentNadoi
    setHTML(incomeAnimal, sumIncomeAnimal)

    sumIncomePlant = valAverageYield * valPercentYield * valSowingArea / 10 * valRealizationTonne + (valAverageYield + valAverageYield * valPercentYield * valSowingArea / 10) * valAverageRefaction * valPercentRefaction * valRealizationTonne + valAverageTMC * valPercentTMC * valSowingArea 
    setHTML(incomePlant, sumIncomePlant)
    
    sumIncomeHuman = valVacanciesMonth * 12 * valVacancies + valAverageTMC * valPercentNotEffectiveTMC * valSowingArea
    setIncomeHTML(incomeHuman, sumIncomeHuman)
    
    sumIncomeThief = valThiefSeason * 35 * valRealizationTonne + valAverageTMC * valPercentTMCSeason * valSowingArea
    setHTML(incomeThief, sumIncomeThief)

    sumTotalIncome = sumIncomeAnimal + sumIncomeHuman + sumIncomePlant + sumIncomeThief 
    setHTML(incomeTotal, sumTotalIncome)

    sumMultiGPS = boolGPS ? 60000 * valVehicles : 0
    setHTML(multiGPS, sumMultiGPS)
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
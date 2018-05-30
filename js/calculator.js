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
var boolPilot = 0
var boolVideo = 0
var boolControl = 0
var boolKart = 0
var boolNDVI = 0
var boolChip = 0
var boolMonitor = 0
var boolWater = 0
var boolRashod = 0
var boolElevator = 0
var boolNotification = 0
var boolSoftware = 0
var boolProg = 0
var boolService = 0

var sumIncomeAnimal = 0
var sumIncomePlant = 0
var sumIncomeHuman = 0
var sumIncomeThief = 0
var sumTotalIncome = 0

var sumCapitalCost = 0
var sumConstantCost = 0
var sumTotalCost = 0

var sumRecoupment = 0

var sumMultiGPS = 0
var checkCounter = 0

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
    boolPilot = parseBool(checkPilot)
    boolVideo = parseBool(checkVideo)
    boolControl = parseBool(checkControl)
    boolKart = parseBool(checkKart)
    boolNDVI = parseBool(checkNDVI)
    boolChip = parseBool(checkChip)
    boolMonitor = parseBool(checkMonitor)
    boolWater = parseBool(checkWater)
    boolRashod = parseBool(checkRashod)
    boolElevator = parseBool(checkElevator)
    boolNotification = parseBool(checkNotification)
    boolSoftware = parseBool(checkSoftware)
    boolProg = parseBool(checkProg)
}

function setDataInputs() {
    var inputs = document.getElementsByTagName('input')
    for (var j = 0; j < inputs.length; j++){
        if (inputs[j].type === 'number'){
            inputs[j].value = j + 1
        } else {
            //inputs[j].checked = true
        }
    }
}

function parseValue(tag) {
    return parseInt(tag.value)
}

function parseBool(tag) {
    return tag.checked
}

function setHTML(tag, sum, currency) {
    if (currency){
        tag.innerHTML = sum ? sum: 'нет данных'
    } else {
        tag.innerHTML = sum ? sum + ' тг.' : 'нет данных'
    }   
}

function countCheckboxes() {
    var inputs = document.getElementsByTagName('input')
    checkCounter = 0
    for (var j = 0; j < inputs.length; j++){
        if (inputs[j].type === 'checkbox' && inputs[j].checked) {
            checkCounter++
        }
    }
}

/* EVENTS */

btnCalculator.onclick = function(e) {
    setDataInputs()
    getDataInputs()

    sumIncomeAnimal = valHeads * valAverageNadoi * valAverageRealization * valPercentNadoi
    setHTML(incomeAnimal, sumIncomeAnimal)

    sumIncomePlant = valAverageYield * valPercentYield * valSowingArea / 10 * valRealizationTonne + (valAverageYield + valAverageYield * valPercentYield * valSowingArea / 10) * valAverageRefaction * valPercentRefaction * valRealizationTonne + valAverageTMC * valPercentTMC * valSowingArea 
    setHTML(incomePlant, sumIncomePlant)
    
    sumIncomeHuman = valVacanciesMonth * 12 * valVacancies + valAverageTMC * valPercentNotEffectiveTMC * valSowingArea
    setHTML(incomeHuman, sumIncomeHuman)
    
    sumIncomeThief = valThiefSeason * 35 * valRealizationTonne + valAverageTMC * valPercentTMCSeason * valSowingArea
    setHTML(incomeThief, sumIncomeThief)

    sumTotalIncome = sumIncomeAnimal + sumIncomeHuman + sumIncomePlant + sumIncomeThief 
    setHTML(incomeTotal, sumTotalIncome)

    sumMultiGPS = boolGPS ? 60000 * valVehicles : 0
    setHTML(multiGPS, sumMultiGPS)

    sumMultiPilot = boolPilot ? 3500000 * valVehicles : 0
    setHTML(multiPilot, sumMultiPilot)

    sumMultiVideo = boolVideo ? 1000000 * valCameras : 0
    setHTML(multiVideo, sumMultiVideo)

    sumMultiControl = boolControl ? 3700000 * (valElectronic + valDesireElectronic) : 0
    setHTML(multiControl, sumMultiControl)

    sumMultiKart = boolKart ? 112 * valSowingArea : 0
    setHTML(multiKart, sumMultiKart)

    sumMultiNDVI = boolNDVI ? 150 * valSowingArea * 3 : 0
    setHTML(multiNDVI, sumMultiNDVI)

    sumMultiChip = boolChip ? 1000 * valHeads : 0
    setHTML(multiChip, sumMultiChip)

    sumMultiMonitor = boolMonitor ? 60000 * valHeads : 0
    setHTML(multiMonitor, sumMultiMonitor)

    sumMultiWater = boolWater ? 3000000 * valDesireWater : 0
    setHTML(multiWater, sumMultiWater)

    sumMultiRashod = boolRashod ? 4500000 * valDesireRashod : 0
    setHTML(multiRashod, sumMultiRashod)

    sumMultiElevator = boolElevator ? 2000 * valVolumeElevator : 0
    setHTML(multiElevator, sumMultiElevator)

    sumMultiNotification = boolNotification ? 60000 : 0
    setHTML(multiNotification, sumMultiNotification)

    sumMultiSoftware = boolSoftware ? 300 * valSowingArea : 0
    setHTML(multiSoftware, sumMultiSoftware)

    sumMultiProg = boolProg ? 300 * valSowingArea : 0
    setHTML(multiProg, sumMultiProg)

    countCheckboxes()

    sumMultiService = 600000

    if (checkCounter > 2) {
        sumMultiService = sumMultiService * checkCounter / 2
    } 
     
    setHTML(multiService, sumMultiService)

    sumCapitalCost = sumMultiGPS + sumMultiPilot + sumMultiVideo + sumMultiControl + sumMultiKart + sumMultiChip + sumMultiMonitor + sumMultiWater + sumMultiRashod + sumMultiElevator + sumMultiProg
    setHTML(capitalCost, sumCapitalCost)

    sumConstantCost = sumMultiNDVI + sumMultiSoftware + sumMultiNotification + sumMultiService
    setHTML(constantCost, sumConstantCost)

    sumTotalCost = sumCapitalCost + sumConstantCost
    setHTML(totalCost, sumTotalCost)

    sumRecoupment = sumTotalIncome / sumTotalCost
    setHTML(recoupment, sumRecoupment, true)
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
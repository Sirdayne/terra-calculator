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

var strName = ''
var strPhone = ''
var strPos = ''
var strOrg = ''
var strText = ''

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

    strName = formName.value
    strPhone = formPhone.value
    strPos = formPos.value
    strOrg = formOrg.value
    strText = formText.value
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
    if (sum) {
        //.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
        if (currency){
            tag.innerHTML = sum
        } else {
            sum = sum.toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
            tag.innerHTML = sum + ' тг.'
        }
    } else {
        tag.innerHTML = '-'
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

function addStr(name, value){
    body += name + encodeURIComponent(value)
}

function getData() {
    var xhr = new XMLHttpRequest
    xhr.open('post', 'get.php', true)

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200){
            var json = JSON.parse(xhr.responseText)
            console.log(json)
        }
    };

    xhr.send()
}

function postData(body) {
    var xhr = new XMLHttpRequest
    xhr.open('post', 'mail.php', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        showModalSuccess()
    };
    xhr.send(body)
}

function showModalSuccess() {
    $('#modal-calc').fadeIn(500);
    setTimeout(function(){ $('#modal-calc').fadeOut(500) }, 3000);
}

function showModalError() {
    $('#modal-calc-err').fadeIn(500);
    setTimeout(function(){ $('#modal-calc-err').fadeOut(500) }, 3000);
}

/* EVENTS */

btnCalculator.onclick = function(e) {
    //setDataInputs()
    getDataInputs()

    //GPS-мониторинг техники
    sumMultiGPS = boolGPS ? 60000 * valVehicles : 0
    setHTML(multiGPS, sumMultiGPS)

    //Автопилоты и курсоуказатели для сельхозтехники
    sumMultiPilot = boolPilot ? 3500000 * valVehicles : 0
    setHTML(multiPilot, sumMultiPilot)

    //IP видеонаблюдение
    sumMultiVideo = boolVideo ? 1000000 * valCameras : 0
    setHTML(multiVideo, sumMultiVideo)

    //Контроль, учет движения зерна на току
    sumMultiControl = boolControl ? 3700000 * (valElectronic + valDesireElectronic) : 0
    setHTML(multiControl, sumMultiControl)

    //Картирование полей на БПЛА
    sumMultiKart = boolKart ? 112 * valSowingArea : 0
    setHTML(multiKart, sumMultiKart)

    //Контроль вегетации (NDVI) на БПЛА
    sumMultiNDVI = boolNDVI ? 150 * valSowingArea * 3 : 0
    setHTML(multiNDVI, sumMultiNDVI)

    //Чипирование для идентификации КРС
    sumMultiChip = boolChip ? 1000 * valHeads : 0
    setHTML(multiChip, sumMultiChip)

    //Системы для внутреннего мониторинга здоровья, активности и питания КРС
    sumMultiMonitor = boolMonitor ? 60000 * valHeads : 0
    setHTML(multiMonitor, sumMultiMonitor)

    //Влагомеры
    sumMultiWater = boolWater ? 3000000 * valDesireWater : 0
    setHTML(multiWater, sumMultiWater)

    //Расходомеры
    sumMultiRashod = boolRashod ? 4500000 * valDesireRashod : 0
    setHTML(multiRashod, sumMultiRashod)

    //Автоматизация элеваторов и сушилок
    sumMultiElevator = boolElevator ? 2000 * valVolumeElevator : 0
    setHTML(multiElevator, sumMultiElevator)

    //Автоматизация уведомления об отключении оборудования
    sumMultiNotification = boolNotification ? 60000 : 0
    setHTML(multiNotification, sumMultiNotification)
    
    //Программное обеспечение по управлению производством
    sumMultiSoftware = boolSoftware ? 300 * valSowingArea : 0
    setHTML(multiSoftware, sumMultiSoftware)

    //Внедрение программного обеспечения
    sumMultiProg = boolProg ? 300 * valSowingArea : 0
    setHTML(multiProg, sumMultiProg)

    //Сервисное обслуживание
    countCheckboxes()

    sumMultiService = 600000

    if (checkCounter > 2) {
        sumMultiService = sumMultiService * checkCounter / 2
    } 
     
    setHTML(multiService, sumMultiService)

    //Капитальные расходы
    sumCapitalCost = sumMultiGPS + sumMultiPilot + sumMultiVideo + sumMultiControl + sumMultiKart + sumMultiChip + sumMultiMonitor + sumMultiWater + sumMultiRashod + sumMultiElevator + sumMultiProg
    setHTML(capitalCost, sumCapitalCost)

    //Постоянные расходы
    sumConstantCost = sumMultiNDVI + sumMultiSoftware + sumMultiNotification + sumMultiService
    setHTML(constantCost, sumConstantCost)

    //Итого расходов на новые технологии
    sumTotalCost = sumCapitalCost + sumConstantCost
    setHTML(totalCost, sumTotalCost)

    //Животноводство
    sumIncomeAnimal = valHeads * valAverageNadoi * valAverageRealization * valPercentNadoi
    setHTML(incomeAnimal, sumIncomeAnimal)

    //Растениеводство
    sumIncomePlant = valAverageYield * valPercentYield * valSowingArea / 10 * valRealizationTonne + (valAverageYield + valAverageYield * valPercentYield * valSowingArea / 10) * valAverageRefaction * valPercentRefaction * valRealizationTonne + valAverageTMC * valPercentTMC * valSowingArea 
    setHTML(incomePlant, sumIncomePlant)
    
    //Человеческий фактор
    sumIncomeHuman = valVacanciesMonth * 12 * valVacancies + valAverageTMC * valPercentNotEffectiveTMC * valSowingArea
    setHTML(incomeHuman, sumIncomeHuman)

    //Кражи
    sumIncomeThief = valThiefSeason * 35 * valRealizationTonne + valAverageTMC * valPercentTMCSeason * valSowingArea
    setHTML(incomeThief, sumIncomeThief)

    //Итого доходов на новые технологии за сезон
    sumTotalIncome = sumIncomeAnimal + sumIncomeHuman + sumIncomePlant + sumIncomeThief 
    setHTML(incomeTotal, sumTotalIncome)

    //Окупаемость (количество сезонов)
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

var body = ''

btnPost.onclick = function(e) {
    getDataInputs()

    try {
        addStr('ФИО=', strName)
        addStr('&Телефон=', strPhone)
        addStr('&Должность=', strPos)
        addStr('&Организация=', strOrg)
        addStr('&Краткое_описание=', strText)

        addStr('&Какова у вас посевная площадь?=', valSowingArea)
        addStr('&Какова у вас средняя реализация 1 тонны товарного зерна=', valRealizationTonne)
        addStr('&Количество голов?=', valHeads)
        addStr('&Количество техники, которые необходимо контролировать?=', valVehicles)
        addStr('&Количество электронных весов=', valElectronic)
        addStr('&Объем хранения зерна на элеваторе=', valVolumeElevator)
        addStr('&Какова средняя урожайность?=', valAverageYield)
        addStr('&Какова средняя рефакция?=', valAverageRefaction)
        addStr('&Каков средний надой/привес 1 головы в год?=', valAverageNadoi)
        addStr('&Какова средняя реализация 1 единицы мясо/молока?=', valAverageRealization)

        addStr('&Сколько камер видеонаблюдения вы хотели бы установить=', valCameras)
        addStr('&Средние расходы ТМЦ на 1 га (ГСМ, семена, химия)=', valAverageTMC)
        addStr('&Количество краж зерна в машинах за 1 сезон=', valThiefSeason)
        addStr('&Доля краж ТМЦ за 1 сезон=', valPercentTMCSeason)
        addStr('&Количество вакансий на более квалифицированный персонал=', valVacancies)
        addStr('&Расходы на 1 вакансию в месяц (зарплата с налогами, проживание, питание)=', valVacanciesMonth)
        addStr('&Доля неээфективных расходов ТМЦ на 1 га, из за "человеческого фактора"=', valPercentNotEffectiveTMC)
        addStr('&Сколько электронных весов вы бы хотели установить=', valDesireElectronic)
        addStr('&Сколько влагомеров вы бы хотели установить на элеваторе=', valDesireWater)
        addStr('&Сколько расходомеров вы бы хотели установить на элеваторе=', valDesireRashod)
        addStr('&Контроль технологии позволит увеличить урожайность=', valPercentYield)
        addStr('&Контроль технологии позволит увеличить надой/привес=', valPercentNadoi)
        addStr('&Контроль технологии позволит сократить рефакцию=', valPercentRefaction)
        addStr('&Контроль технологии позволит сократить расходы на ТМЦ=', valPercentTMC)
        
        addStr('&GPS-мониторинг техники=', sumMultiGPS)
        addStr('&Автопилоты и курсоуказатели для сельхозтехники=', sumMultiPilot)
        addStr('&IP видеонаблюдение=', sumMultiVideo)
        addStr('&Контроль, учет движения зерна на току=', sumMultiControl)
        addStr('&Картирование полей на БПЛА=', sumMultiKart)
        addStr('&Контроль вегетации (NDVI) на БПЛА=', sumMultiNDVI)
        addStr('&Чипирование для идентификации КРС=', sumMultiChip)
        addStr('&Системы для внутреннего мониторинга здоровья, активности и питания КРС=', sumMultiMonitor)
        addStr('&Влагомеры=', sumMultiWater)
        addStr('&Расходомеры=', sumMultiRashod)
        addStr('&Автоматизация элеваторов и сушилок=', sumMultiElevator)
        addStr('&Автоматизация уведомления об отключении оборудования=', sumMultiNotification)
        addStr('&Программное обеспечение по управлению производством=', sumMultiSoftware)
        addStr('&Внедрение программного обеспечения=', sumMultiProg)
        addStr('&Сервисное обслуживание=', sumMultiService)
        addStr('&Итого расходов на новые технологии=', sumTotalCost)
        addStr('&Капитальные расходы=', sumCapitalCost)
        addStr('&Постоянные расходы=', sumConstantCost)
        addStr('&Итого доходов на новые технологии за сезон=', sumTotalIncome)
        addStr('&Животноводство=', sumIncomeAnimal)
        addStr('&Растениеводство=', sumIncomePlant)
        addStr('&Человеческий_фактор=', sumIncomeHuman)
        addStr('&Кражи=', sumIncomeThief)
        addStr('&Окупаемость (количество сезонов)=', sumRecoupment)

        postData(body)
    } catch(error) {
        showModalError()
    }
}

$('body').on('click', '.arrows', function () {
    var indexArrow = $('.arrows').index(this);
    $('.arrows').eq(indexArrow).toggleClass('js-active');
    $('.spoiler-calc').eq(indexArrow).slideToggle(500);
});
let name = "";
let description = "";
let frequency = "";
let period = 0;
const habitNameInput = document.querySelector("#habitName");
const descriptionTextArea = document.querySelector("#habitDescription");
const periodInput = document.querySelector("#period");
const frequencySelector = document.querySelector("#frequency");
const totalElement = document.querySelector("#totalCount");
function nameChangeHandler(ev){
    const eventValue = ev.target.value;
    name =  eventValue;
    console.log('name',name);
}
habitNameInput?.addEventListener('input', nameChangeHandler)
function descriptionChangeHandler(ev){
    const eventValue = ev.target.value;
    description =  eventValue;
    console.log('desc',description);
}
descriptionTextArea?.addEventListener('input', descriptionChangeHandler)

function frequencyChangeHandler(ev){
    const eventValue = ev.target.value;
    frequency = eventValue !== undefined ? parseInt(eventValue) : undefined;
    console.log('freq',frequency);
}

frequencySelector?.addEventListener('change', frequencyChangeHandler);
function periodChangeHandler(ev){
    const eventValue = ev.target.value;
    // тернарный опертора если evenValue не undefined с методом parseInt преобразуем значение в number иначе вернет undefined
    period = eventValue !== undefined ? parseInt(eventValue) : undefined;
    console.log('period',period);
}

periodInput?.addEventListener('input', periodChangeHandler)
const calcTotal = () => {
    // по умолчанию Не подсчитано
    let res = "Не подсчитано";
    /// если частота не указана то соответствующий текст
    if(frequency == undefined){
        res = "Не указана частота"
    }
    //если период не указан то соответствующий текст
    else if (period == undefined){
        res = "Не указан период"
    }
    else {
        //если есть все данные то вычисляем период и преобразуем в строку
        res = (frequency * period).toString();
    }
    console.log(frequency,period);
    //
    totalElement.textContent = res;
}
calcTotal()

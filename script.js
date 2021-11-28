const start = function(){

}();

class ExhangeRate {
    constructor(){
        
    }
    /* делаем кеширование */
    toCash(base, symbol, response){

    }

    async getCoefficient (base, symbol) {
        //type tring "RUB"
        if(base == symbol) return 1; /* чтобы не повторять запрос к серверу */
        let response = await fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbol}`);
        response = await response.json();
        /* почему здесь let уже не пишут??*/
        response = response.rates[symbol];
        return response;
    }
}

class RenderPage {
    constructor(pageModel) {
        this.page = pageModel || { /*если pagemodel не придет и будет undefined
            то пропишем сами модель */
            left: {
                buttons: [
                    {name: "RUB", el: leftRub},
                    {name: "USD", el: leftUsd},
                    {name: "EUR", el: leftEur},
                    {name: "GGP", el: leftGbp}
                ],
                input: leftSum,
                hint: leftHint
            }, 
            right: {
                buttons: [
                    {name: "RUB", el: rightRub},
                    {name: "USD", el: rightUsd},
                    {name: "EUR", el: rightEur},
                    {name: "GGP", el: rightGbp}
                ],
                input: rightSum,
                hint: rightHint
            }, 
            selectClass: "select-button"

        }; /**существование кнопок*/
    }

}

const asyncZ = async function(){
    const example = new ExhangeRate ();
    console.log(await example.getCoefficient("USD", "RUB"));
}(); /* вызываем, чтобы посмотреть результат и что все работает  */
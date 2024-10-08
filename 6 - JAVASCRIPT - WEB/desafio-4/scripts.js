
const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.47
const euro = 5.9
const bitcoin = 0.00000307

const convertValues = async () =>{
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high
    
    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReais)

    if(select.value === 'US$ Dólar americano'){
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD',
        }).format(inputReais/dolar)
    }

    if(select.value === '€ Euro'){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',{
            style:'currency',
            currency:'EUR',
        }).format(inputReais/euro)
    }

    if(select.value === 'Bitcoin'){
        currencyValueText.innerHTML = new Intl.NumberFormat('bt-BT',{
            style: 'currency',
            currency:'BTC',
        }).format(inputReais/bitcoin)
    }
    
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if(select.value === 'US$ Dólar americano'){
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = './assets/bandeira-eua.png'
    }

    if(select.value === '€ Euro'){
        currencyName.innerHTML = '€ Euro'
        currencyImg.src = './assets/logo-euro.png'
    }

    if(select.value === 'Bitcoin'){
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/logo-bitcoin.png'
    }

    convertValues()

}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)
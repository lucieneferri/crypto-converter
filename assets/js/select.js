import { getCurrenciesList } from "./api"

const entrySelect = document.querySelector('#from')
const outpuSelect = document.querySelector('#to')

async function creatOption(){
    const data = await getCurrenciesList()
    //transformar o Objeto retornado em um array para poder usar o FOREACH
    //o método utilizado é o Object.keys()
    //Primeiro select
    const cryptos = Object.keys(data.crypto)
    //o nome do array agora é CRYPTOS
    

    //percorrer o array atravéz das chaves do objeto

    
    cryptos.forEach(crypto => {
        const option = document.createElement('option')
        option.value = data.crypto.symbol
        option.innerHTML =` ${data.crypto[crypto].name_full}`
        entrySelect.appendChild(option)
        console.log(crypto)

    })

    //Segundo select
    const currency = Object.keys(data.fiat)
    currency.forEach(fiat=>{
        const option = document.createElement('option')
        option.value = data.fiat
        option.innerHTML = `${data.fiat[fiat]} (${fiat})`
        outpuSelect.appendChild(option)
    })
}

creatOption()
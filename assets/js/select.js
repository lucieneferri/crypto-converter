//Criar as opções de selects nos inputs através de uma API

/*Criar uma função que faça essa busca para mim. Para isso preciso buscar
os elementos no HTML
*/

const entrySelect = document.querySelector('#from')
const outpuSelect = document.querySelector('#to')

async function creatOption(){
    //buscar o dado da API e guardar em uma variável
    const response = await fetch('http://api.coinlayer.com/list?access_key=566dd89ebc2cb2fd51f869b4103e5cdf')
    const data = await response.json()
    console.log(data)

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
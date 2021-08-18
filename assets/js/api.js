//Fazer uma função que busque a API

export async function getCurrenciesList(){
    const response = await fetch('http://api.coinlayer.com/list?access_key=566dd89ebc2cb2fd51f869b4103e5cdf')
    const data = await response.json()

    return data
}
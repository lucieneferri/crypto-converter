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
    
}

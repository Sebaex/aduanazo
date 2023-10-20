async function getValorDolar() {
    const data = await fetch("https://mindicador.cl/api/dolar")
    .then((response) => response.json())
    .then((indicador) => {
        return indicador.serie[0].valor
    } )
    return data
}

export default getValorDolar
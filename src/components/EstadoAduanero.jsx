import bruh from "../assets/bruh.png"
import CalculoAduanas from "./CalculoImpuestoAduanero"

function EstadoAduanero({valorProducto}){
    var limiteAduana = 41

    if (!valorProducto) {
        return(
            <>
            </>
        )
    }

    if (valorProducto && valorProducto.includes(',')) {
        valorProducto = valorProducto.replace(',','.')
    }

    if (valorProducto < 0 || isNaN(valorProducto)) {
        return (
        <>
            <img src={bruh} alt="m a n" />
        </>
        )
    }

    if (valorProducto <= limiteAduana) {
        return (
        <>
            <div>
                <h1 className="bg-blue-700 text-5xl p-8 font-semibold rounded-lg mb-4">Nada de que preocuparse</h1>
                <p className="text-xl">El envío pasa sin problemas</p>
            </div>
        </>
        )
    } else {
        return (
        <>
            <div>
                <h1 className="bg-red-700 text-5xl p-8 font-semibold rounded-lg mb-4">Anda a prender velitas</h1>
                <p className="text-xl">Y que no te lo retengan, mientras vamos a lo odioso, calculos:</p>
                <section>
                    <CalculoAduanas valorProducto={parseInt(valorProducto)}></CalculoAduanas>
                </section>
            </div>
        </>
        )
    }
}

export default EstadoAduanero
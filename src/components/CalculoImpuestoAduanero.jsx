import { useEffect, useState } from "react"
import getValorDolar from "./GetValorDolar"

function CalculoAduanas({valorProducto}){
    var [valorDolar, setValorDolar] = useState()
    var derechoAduanero = valorProducto * 0.06
    var iva = (valorProducto + derechoAduanero) * 0.19
    useEffect(() => {
      async function getDolar(){
        const dolar = await getValorDolar()
        setValorDolar(dolar)
      }
      getDolar()
    }, [])
    
    return(
        <div className="mt-6 text-2xl">
            <ul className="space-y-10">
              <li>Derecho aduanero: CLP {parseInt(derechoAduanero * valorDolar)}</li>
              <li>I.V.A: CLP {parseInt(iva * valorDolar)}</li>
              <li className="font-bold">Total a pagar (aproximado): CLP {parseInt((derechoAduanero + iva) * valorDolar)}</li>
            </ul>
        </div>
    )
}

export default CalculoAduanas
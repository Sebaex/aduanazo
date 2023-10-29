import { useEffect, useState, useRef } from "react"
import "./App.css"
import calculoImpuesto from "./assets/calculoImpuesto.png"
import EstadoAduanero from "./components/EstadoAduanero"
import getValorDolar from "./components/GetValorDolar"

function App() {
  var [valorItemUsuario, setValorItemUsuario] = useState()
  var [valorDolar, setValorDolar] = useState()

  useEffect(() => {
    async function getDolar(){
      const dolar = await getValorDolar()
      setValorDolar(dolar)
    }
    getDolar()
  }, [])
  const dialogRef = useRef(null)
  return (
    <>
    <div className="text-white">
      <div>
        <section>
          <h1 className="font-bold text-4xl md:text-5xl">Calcula el valor de tu aduanazo</h1>
          <h5 className="text-xs">(si es que te cae)</h5>
        </section>
        <br/>
        <section>
          <p className="text-2xl">Ingresa el valor de la compra en dólares</p>
          <div className="inline-flex flex-wrap relative items-stretch place-content-center text-xl my-8">
            <span className="flex align-center px-2 py-3 border rounded-l-lg border-transparent bg-[#484848]">$</span>
            <input className=" text-center outline-none rounded-r-lg bg-[#363636]" onChange={e => setValorItemUsuario(e.target.value)} type="text" name="valorItemUsuario"/>
          </div>
        </section>
      </div>

      <div className="flex justify-center items-center mb-16">
        <EstadoAduanero valorProducto={valorItemUsuario}></EstadoAduanero>
      </div>

      <button className="bg-blue-700 text-white rounded-md p-2 px-6 mb-8" onClick={() => dialogRef.current.showModal()}>¿Y cómo funciona?</button>

      <div>
        <p>Valor del dólar: ${valorDolar}</p>
        <p>Datos provistos por <a className="text-blue-400" href="https://mindicador.cl/">Mindicador</a></p>
      </div>

      <dialog ref={dialogRef} className="bg-[#363636] text-white p-6 rounded-[24px] backdrop:backdrop-blur-sm">
        <p className="text-l font-semibold md:text-3xl" >Básicamente, sigue los cálculos de esta foto que seguramente pocos conocen</p>
        <img src={calculoImpuesto} alt="Calculo de Impuestos" className="p-2 my-8" />
        <p className="italic mb-4">Nota: El IVA se aplica sobre el valor del producto mas su respectivo derecho aduanero.</p>
        <p className="my-4">Fuente: <a className="text-blue-400" href="https://www.aduana.cl/cuando-debo-pagar-impuestos/aduana/2018-12-12/233227.html">Aduanas de Chile</a></p>
        <p><button className="bg-blue-700 rounded-md p-2 px-6" onClick={() => dialogRef.current.close()}>Entendible</button></p>
      </dialog>
      </div>  
    </>
  )
}

export default App
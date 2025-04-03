import { useState } from 'react'
import './App.css'
import { evaluate } from 'mathjs';

function App() {
    const [valor, setValor] = useState("");

    const cambioValor = (e) => {
        setValor(valor + e.target.value);
    }

    const calcularResultado = () => {
        setValor(evaluate(valor).toLocaleString());
    }

    function resetValor() {
        setValor("");
    }

    function eliminarNumero() {
        setValor(valor => Math.floor(valor / 10));
    }



    return (
        <>
            <div className='container mt-5 bg-stone-500 box-calculator flex justify-center flex-wrap gap-4'>
                <div className='flex justify-center items-end flex-column show-outputs bg-white'>
                    <p> {valor} </p>
                </div>
                <div className='grid grid-cols-4 grid-rows-3 gap-3 w-100 show-inputs'>
                    <button value="1" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 1 </button>
                    <button value="2" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 2 </button>
                    <button value="3" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 3 </button>
                    <button value=" + " className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> + </button>
                    <button value="4" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 4 </button>
                    <button value="5" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 5 </button>
                    <button value="6" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 6 </button>
                    <button value=" - " className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> - </button>
                    <button value="7" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 7 </button>
                    <button value="8" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 8 </button>
                    <button value="9" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 9 </button>
                    <button value=" * " className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> X </button>
                    <button value="0" className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> 0 </button>
                    <button value=" . " className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> . </button>
                    <button value=" % " className='bg-stone-700 text-white flex items-center justify-center' onClick={cambioValor}> % </button>
                    <button value=" / " className='bg-stone-700 text-white flex items-center justify-center'> / </button>
                </div>
                <div onClick={calcularResultado} className='btn btn-primary'>
                    Resultado
                </div>
                <div onClick={resetValor} className='btn btn-danger'>
                    Limpiar
                </div>
                <div onClick={eliminarNumero} className='btn btn-primary'>
                    Eliminar
                </div>
            </div>
        </>
    )
}

export default App

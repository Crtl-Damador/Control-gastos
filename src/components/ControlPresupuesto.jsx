import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({gastos,setGastos, presupuesto, setPresupuesto,setIsValidPresupuesto}) => {

const [porcentaje, setPorcentaje] = useState(0)
const [disponible, setDisponible] = useState(0)
const [gastado, setGastado] = useState(0)

useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
    setGastado(totalGastado)

    const totalDisponible = presupuesto - totalGastado
    setDisponible(totalDisponible)

    //* Calcular el porcentaje gastado
    const NuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

    setTimeout(() => {
        setPorcentaje(NuevoPorcentaje)  
    }, 1500);

}, [gastos])


  const FormatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('es-CR', {
        style: 'currency',
        currency: 'CRC'
    })

  }

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if(resultado){
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' :'#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: porcentaje > 100 ? '#DC2626' :'#3B82F6',

                })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}
            />
        </div>
        <div className='contenido-presupuesto'>
            <button
                className="reset-app"
                type="button"
                onClick={handleResetApp}
            >
                Resetear app
            </button>
            <p>
                <span>Presupuesto: </span> {FormatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                <span>Disponible: </span> {FormatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {FormatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
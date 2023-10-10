import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  setIsValidPresupuesto
  }) => {

  const [mensaje, setmensaje] = useState('')

  const HandlePresupuesto = (e) => {
    e.preventDefault()

    if(!presupuesto || presupuesto < 0){
      setmensaje('No es un presupuesto valido')

      return
    }
    setmensaje('')
    setIsValidPresupuesto(true)

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form  onSubmit={HandlePresupuesto}  className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                className='nuevo-presupuesto'
                type="number" 
                placeholder='Añade tu presupuesto'
                value={presupuesto}
                onChange={e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value="Añadir" />
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
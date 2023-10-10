
export const generarId = () => {
    const Random = Math.random().toString(36).substr(2)
    const Fecha = Date.now().toString(36)

    return Random + Fecha
}

export const formatearFecha = fecha => {
    const NuevaFecha = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return NuevaFecha.toLocaleDateString('es-CR', opciones)
}
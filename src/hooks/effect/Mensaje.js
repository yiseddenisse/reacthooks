import React, { useEffect, useState } from 'react';

export const Mensaje = () => {

    //Creamos el estado de las coordenadas, cuyo estado inicial va ser un objeto con valores de x y y en null
    const [coordenadasState, setCoordenadasState] = useState({
        x: null,
        y: null
    });
    
    //Implementamos useEffect con cleanup. No tiene ninguna dependencia (en su segundo parámetro) por lo cual
    // este useEffect se va ejecutar solamente cuando el componente se ejecute por primera vez.
    useEffect(() => {
        console.log('Componente montado...');

        //Encapsulamos la funcionalidad de las coordenadas en una función.
        const mouseMove = (e) => {
            //const coordenadas = { x: e.x, y: e.y };
            setCoordenadasState({ x: e.x, y: e.y });
            //console.log(coordenadas);
        }
        //Obtenemos las coordenadas X y Y del mouse y las mostramos en la consola del navegador. Mandamos llamar
        // la función mouseMove
        window.addEventListener('mousemove', mouseMove);

        return () => {
            //Hacemos la limpieza del componente. Removemos el listener que se creó al montar el componente.
            window.removeEventListener('mousemove', mouseMove);

            console.log('Componente desmontado...');
        }
    }, []);
    
    return (
        <>
            <h3>Coordenada en x: {coordenadasState.x}</h3>
            <h3>Coordenada en y: {coordenadasState.y}</h3>
        </>
    )
}
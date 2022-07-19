
//  Calculadora costo imrpesion 3d (se guardan las cotizaciones en arrays)

//  Se definen variables

let nombre = "";
let pesoPieza = "";
let filamento3d = "";
let tiempoImpresion = "";
let manoObra = "";
let impresora = "";
let electricidad = "";
let costoTotal = 0;

const form = document.getElementById("calculadora");
const btnCalcular = document.getElementById("calcular");

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

//CTA Comenzar lleva a la calculadora
const btnComenzar = document.getElementById("btn-comenzar");
btnComenzar.addEventListener("click", (e) => {
    window.location.href = "#calculadora-section";
});

// Si el toggle switch esta prendido o apagado cambia el copy del boton
let switchCotizacion = document.getElementById("flexSwitchCheckDefault")/* .checked */;
switchCotizacion.addEventListener("change", (e) => {
    if (e.target.checked) {
        btnCalcular.innerText = 'Calcular y agregar';
    } else {
        btnCalcular.innerText = 'Calcular';
    }
});

//Se define la funcion para calcular el costo
calcularImpresion3D = () => {

    //1) se reciben los datos desde el html
    let nombre = document.getElementById("nombre").value;
    let pesoPieza = parseInt(document.getElementById("peso").value);
    let filamento3d = parseInt(document.getElementById("filamento").value);
    let tiempoImpresion = parseInt(document.getElementById("tiempo").value);
    let manoObra = parseInt(document.getElementById("mano-obra").value);
    let impresora = 299990;
    let electricidad = 144;
    

    // se lee el toggle switch
    let switchCotizacion = document.getElementById("flexSwitchCheckDefault").checked;

    if (!switchCotizacion) {
        //si el switch está apagado
        //1) se calcula el costo
        let costoTotal = (filamento3d * pesoPieza / 1000) + manoObra + (electricidad * tiempoImpresion) + (impresora / 150
)

        //2) se imprime el costo en el html
        let costohtml = document.getElementById("costo");
        costohtml.innerText = "Costo: $" + Math.round(costoTotal);

    } else {
        //si el switch está prendido
        
        //1) se calcula el costo
        
        let costoTotal = (filamento3d * pesoPieza / 1000) + manoObra + (electricidad * tiempoImpresion) + (impresora / 150
)

 //2) se imprime el costo en el html
 let costohtml = document.getElementById("costo");
 costohtml.innerText = "Costo: $" + Math.round(costoTotal);

 //3) se define un nuevo obj y se empuja al array de cotizaciones
 const resultadoCalculo = new cotizacionServicio3d (nombre, pesoPieza, filamento3d, tiempoImpresion, manoObra, impresora, electricidad, costoTotal);

 //4) el obj se empuja al array de cotizaciones
 cotizaciones.push(resultadoCalculo);
 
 //5) crea una lista con el nombre y el costo de cada pieza para generar la cotizacion
 addToCotizacion = () => {
    
     let cotizacionList = document.getElementById("cotizacion-list");
     let cotizacionItem = document.createElement('li');
     cotizacionList.append(cotizacionItem);
     cotizacionItem.innerText = nombre + ": " + Math.round(costoTotal);

     let btnEliminar = document.createElement('button');
     cotizacionItem.append(btnEliminar);
     btnEliminar.innerText = "Eliminar";

     btnEliminar.onclick = () => {
         cotizacionList.removeChild(cotizacionItem);
     }

 }

 addToCotizacion();

        //6) se recorre el array y se suman los costos

        calcularTotal = () => {
            let total = 0;

            cotizaciones.forEach(resultadoCalculo => {
                total += resultadoCalculo.costoTotal;
            });
            
            //7) se imprime el resultado en el html "total"
            let totalhtml = document.getElementById("total");
            totalhtml.innerText = "Total: $" + Math.round(total);



            
            /* const guardarSesion = (CotizacionesArr, cotizaciones)
            sessionStorage.setItem("CotizacionesArr", cotizaciones);
            const convertirjson = JSON.stringify(CotizacionesArr);
            console.log(convertirjson); */
        }

        calcularTotal();
          
    } 
}



btnCalcular.onclick = () => {
  
    calcularImpresion3D();
}


 
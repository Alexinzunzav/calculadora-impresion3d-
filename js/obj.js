// se van listando los servicios ingresados
const cotizaciones = [];

// objeto cotizacion servicios 

class cotizacionServicio3d {
    constructor (nombre, pesoPieza, filamento3d, tiempoImpresion, manoObra, impresora, electricidad, costoTotal) {
        this.nombre = nombre;
        this.pesoPieza = pesoPieza;
        this.filamento3d = filamento3d;
        this.tiempoImpresion = tiempoImpresion;
        this.manoObra = manoObra;
        this.impresora = impresora;
        this.electricidad = electricidad;
        this.costoTotal = costoTotal;
    }

    
    totalizar() {
        this.costoTotal = (this.filamento3d * this.pesoPieza / 1000) + this.manoObra + (this.electricidad * this.tiempoImpresion) + (this.impresora / 150); 
    }
    

}


export interface OrdenTrabajo {
    idOrdenTrabajo?:number;
    numeroOrden?:         string;
    nombreEquipo?:        string;
    numeroSerie?:         string;
    marca?:               string;
    modelo?:              string;
    observacionesEquipo?: string;
    fecha?:               Date;
    aniosGarantia?:       number;
    estado?: string,
    numeroFactura?:       string;
    fechaFactura?:        Date;
    montoFactura?:        number;
    usuario:             Usuario;
    cliente:             Cliente;
    proveedor:           Proveedor;
}

 export interface Cliente {
    idCliente?: number,
    cedula?:      string;
    nombres?:     string;
    apellidos?:   string;
    telefono?:    string;
    direccion?:   string;
    correo?:      string;
}
export interface Usuario {
    idUsuario:  number;
   
}
 export interface Proveedor {
    id?: number,
    cedula?:      string;
    nombres?:     string;
    apellidos?:   string;
    telefono?:    string;
    direccion?:   string;
    correo?:      string;
}
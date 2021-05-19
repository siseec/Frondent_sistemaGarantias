export interface OrdenTrabajo {
    numeroOrden:         string;
    nombreEquipo:        string;
    numeroSerie:         string;
    marca:               string;
    modelo:              string;
    observacionesEquipo: string;
    fecha:               Date;
    aniosGarantia:       number;
    numeroFactura:       string;
    fechaFactura:        Date;
    montoFactura:        number;
    usuario:             Usuario;
    cliente:             Cliente;
    proveedor:           Proveedor;
}

 interface Cliente {
    cedula:      string;
    nombres:     string;
    apellidos:   string;
    telefono:    string;
    direccion:   string;
    correo:      string;
}
 interface Usuario {
    idUsuario:  number;
   
}
 interface Proveedor {
    cedula:      string;
    nombres:     string;
    apellidos:   string;
    telefono:    string;
    direccion:   string;
    correo:      string;
}
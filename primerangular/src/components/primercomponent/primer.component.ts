
import { Component } from "@angular/core";

// Siempre declarar el contenido del componente
@Component({
    // Nombre del componente en las vistas
    selector: "primer-component",

    standalone: false,

    // Código HTML del componente
    templateUrl: "./primer.component.html",
    styleUrls: ["./primer.component.css"]
})

// Cada componente debe tener una clase asociada
export class PrimerComponent {

    // Variables del componente con su tipo de dato
    public nombre: string;
    public year: number;

    // Constructor para inicializar las variables
    constructor() {
        this.nombre = "Alumno";
        this.year = 2026;
    }
}


//     templete:
//     <h1>Soy un componente angular</h1>
// })
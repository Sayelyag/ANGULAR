
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

// Siempre declarar el contenido del componente
@Component({
    // Nombre del componente en las vistas
    selector: "hook-component",

    standalone: false,

    // Código HTML del componente
    templateUrl: "./hook.component.html",
    styleUrls: ["./hook.component.css"]
})

// Cada componente debe tener una clase asociada
export class HookComponent implements OnInit {

    // Variables del componente con su tipo de dato
    public mensaje: string;
    // Constructor para inicializar las variables
    constructor() {
        console.log("Constructor: Primer metodo del Component");
        this.mensaje = "Hoy es Lunes..."
    }

    ngOnInit(): void {
        console.log("OnInit: Me ejecuto depues del constructor");
    }

    ngDoCheck(): void{
        console.log("DoCheck: Me ejecuto al cambiar el render");
    }
    
    cambiarMensaje(): void {
        this.mensaje = "Y mañana es Martes!"
    }
}
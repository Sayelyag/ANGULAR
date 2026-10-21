import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

@Component({
    selector: "app-forms-binding",
    standalone: false,
    templateUrl: "./forms.binding.component.html",
    styleUrls: ["./forms.binding.component.css"]
})
export class FormsBindingComponent {
    public user: any;
    public mensaje:string;

    constructor() {
        this.mensaje = "";
        this.user = {
            nombre: "",
            apellido: "",
            edad: 0,
        };
    }

    recibirDatos():void{
        this.mensaje = "Datos recibidos correctamente";
    }
}
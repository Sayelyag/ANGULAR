
import { Component } from "@angular/core";

@Component({
    selector: "app-deportes",
    standalone: false,
    templateUrl: "./deportes.component.html",
    styleUrls: ["./deportes.component.css"]
})
export class DeportesComponent {
    public numeros: Array<number>;
    public sport: Array<string>;

    constructor() {
        this.numeros = [1, 2, 3, 4, 5];

        this.sport = [
            "Futbol",
            "Basketball",
            "Tennis",
            "Baseball",
            "Swimming"
        ];
    }
}

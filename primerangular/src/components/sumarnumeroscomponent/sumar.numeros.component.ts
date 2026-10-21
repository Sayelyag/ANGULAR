import { Component, ElementRef, ViewChild } from "@angular/core";


@Component({
    selector: 'sumar-numeros',
    standalone: false,
    templateUrl: './sumar.numeros.component.html'
})

export class SumarNumerosComponent {
    public suma: number;
    @ViewChild("cajanumero1") cajanumero1: ElementRef;
    @ViewChild("cajanumero2") cajanumero2: ElementRef;

    constructor() {
        this.suma = 0;
        this.cajanumero1 = new ElementRef(0);
        this.cajanumero2 = new ElementRef(0);
    }

    sumarNumeros(): void {
        let num1 = this.cajanumero1.nativeElement.value;
        let num2 = this.cajanumero2.nativeElement.value;
        this.suma = parseInt(num1) + parseInt(num2);
    }
}
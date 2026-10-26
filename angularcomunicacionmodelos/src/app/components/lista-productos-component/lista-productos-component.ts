import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto:Producto;
  public listaproductos: Producto[];
  constructor(){
    this.producto = new Producto("Camiseta", 100, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7fzjCYnyTCx739Q1QKPwN9KeMHGalkK2HRsw5B69DAUaJjT42w9wv-O8&s=10");

    this.listaproductos = new Array<Producto>();
    this.listaproductos = [
      new Producto(
        "Nike Air Jordan",
        150,
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg"
      ),
      new Producto(
        "Nike Air Mag",
        1900,
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg"
      ),
      new Producto(
        "New Balance 998",
        140,
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg"
      ),
      new Producto(
        "J-Hayber Olimpo",
        60,
        "https://jhayber.com/documents/images/products/63638-850-1.jpg"
      ),
      new Producto(
        "Cangrejeras",
        10,
        "https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp"
      )
    ]
  }
}

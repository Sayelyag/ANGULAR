export class Producto{
  public nombre: string;
  public precio: number;
  public imagen: string;

  //Tenemos un constructor para enviar los datos
  //al crear el modulo
  constructor(name: string, price: number, image: string){
    this.nombre = name;
    this.precio = price;
    this.imagen = image;
  }
}

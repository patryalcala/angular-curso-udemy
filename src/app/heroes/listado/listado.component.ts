import { Component /*, OnInit */ } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent /*implements OnInit*/ {

  // constructor() { 
  //   console.log('constructor');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(indice: number) {
    console.log(`Se va a eliminar el elemento ${indice} del listado de heroes`);
    //this.heroeBorrado = this.heroes.splice(indice, 1)[0];
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Héroes borrados: ', this.heroeBorrado)
  }
}

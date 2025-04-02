import { Component } from '@angular/core';

interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
//Declaramos un arreglo de elementos y ponemos cada elemento para el menu
  elementos: Elemento[]=[
    {
      icono: 'paw',
      nombre: 'Personajes',
      ruta: '/personajes'
    },
    {
      icono: 'game-controller',
      nombre: 'Controles',
      ruta: '/controles'
    },
    {
      icono: 'heart',
      nombre: 'Items',
      ruta: '/items'
    },
    {
      icono: 'people-outline',
      nombre: 'Sobre Nosotros',
      ruta: '/about'
    },

  ];

  constructor() {}
}

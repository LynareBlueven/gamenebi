import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
import { RespuestaApi } from 'src/app/interfaces/interfaces';
import { Personajes } from 'src/app/interfaces/interfaces';
import { PersonajesService } from 'src/app/services/personajes.service';
@Component({
  standalone: false,
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
//creamos el objeto personajesrecientes para guardar el arreglo personajes
  personajesRecientes: Personajes[]=[];
  //creamos el objeto servicioPersonajes
  constructor(
    private servicioPersonajes: PersonajesService,
    private modalCtrl:ModalController
  ) { 
  }
//Este metodo nos ayudara para poder clickar el personaje y ver su Info, se vincula con detalle al cumplirse la promesa
  async verDetalle(personaje: Personajes){
    const modal= await this.modalCtrl.create({
      component:DetalleComponent,
      componentProps:{personaje}
    });
    modal.present();
  }
//ejecutamos GetDatos para poder hacer la llamada a nuestra api mediante el objeto servicioPersonajes
  ngOnInit() {
        this.servicioPersonajes.getDatos()
        .subscribe((resp: RespuestaApi)=>{
          console.log('Personaje', resp)
          this.personajesRecientes=resp.Personajes
        });
    }
  
}

import { Component, OnInit, Input } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ModalController } from '@ionic/angular';
import { RespuestaDetalle } from 'src/app/interfaces/interfaces';
import { Personajes } from 'src/app/interfaces/interfaces';
import { Detalle } from 'src/app/interfaces/interfaces';
@Component({
  standalone: false,
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {
@Input() id: any;
@Input() personaje!: Detalle;
//Utilizamos el objeto modalController para poder usar la ventana modal ademas del objeto para usar el detalle
constructor(private modalCtrl: ModalController,
  private detalle:PersonajesService){}
//generamos la funcion para poder salir del detalle
regresar(){
  this.modalCtrl.dismiss();
}
//llamamos los datos y los almacenamos en la variable
ngOnInit(){
this.detalle.getDetalle(this.id)
.subscribe((respuesta: RespuestaDetalle)=>{
console.log("Detalle Personaje", respuesta)
this.personaje=respuesta.Personajes;

});
}
 
}

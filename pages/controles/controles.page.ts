import { Component, OnInit} from '@angular/core';
import { RespuestaApi } from 'src/app/interfaces/interfaces';
import { ControlesService } from 'src/app/services/controles.service';
import { Controles } from 'src/app/interfaces/interfaces';


@Component({
  standalone: false,
  selector: 'app-controles',
  templateUrl: './controles.page.html',
  styleUrls: ['./controles.page.scss'],
})
export class ControlesPage implements OnInit {
//creamos el objeto itemsRecientes para guardar el arreglo items
  controlesRecientes: Controles[]=[];

  constructor(private servicioControles: ControlesService) { }
//ejecutamos GetDatos para poder hacer la llamada a nuestra api mediante el objeto controlesRecientes
  ngOnInit() {
    this.servicioControles.getDatos()
    .subscribe((resp: RespuestaApi)=>{
      console.log('Controles', resp)
      this.controlesRecientes=resp.Controles
    });
  }

}

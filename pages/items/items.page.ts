import { Component, OnInit } from '@angular/core';
import { Items } from '../../interfaces/interfaces';
import { ItemsService } from 'src/app/services/items.service';
import { RespuestaApi } from 'src/app/interfaces/interfaces';


@Component({
  standalone: false,
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
//creamos el objeto itemsRecientes para guardar el arreglo items
  itemsRecientes: Items[]=[];

  constructor(private servicioItems: ItemsService) { }
//ejecutamos GetDatos para poder hacer la llamada a nuestra api mediante el objeto itemsRecientes
  ngOnInit() {
      this.servicioItems.getDatos()
      .subscribe((resp: RespuestaApi)=>{
        console.log('Items', resp)
        this.itemsRecientes=resp.Items
      });
  }
}

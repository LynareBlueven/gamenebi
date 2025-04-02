import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../../componentes/componentes.module';
import { IonicModule } from '@ionic/angular';

import { ControlesPageRoutingModule } from './controles-routing.module';

import { ControlesPage } from './controles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlesPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ControlesPage]
})
export class ControlesPageModule {}

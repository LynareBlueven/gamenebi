import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Controles, RespuestaApi } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ControlesService {
//Importamos y usamos el servicio HTTPClient para poder hacer peticiones http
  constructor(private http:HttpClient) { }
//Un servicio que se encarga obtener los datos de la URL(API)
  getDatos(){
    return this.http.get<RespuestaApi>('https://videojuego-c6321-default-rtdb.firebaseio.com/.json')
  }
//Un servicio que se encarga obtener los datos de la URL pero especificamente de la estructura controles
  getControles( id: number ) {
    return this.http.get<Controles>(`https://videojuego-c6321-default-rtdb.firebaseio.com/.json${id}`);
    }
}

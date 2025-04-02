import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes, RespuestaApi } from '../interfaces/interfaces';
import { RespuestaDetalle } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
//Importamos y usamos el servicio HTTPClient para poder hacer peticiones http
  constructor(private http:HttpClient) { }
//Un servicio que se encarga obtener los datos de la URL(API)
  getDatos(){
      return this.http.get<RespuestaApi>('https://videojuego-c6321-default-rtdb.firebaseio.com/.json')
    }
  
//Un servicio que se encarga obtener los datos de la URL(API) pero solo unos datos en especifico
  getDetalle( id: number ) {
      return this.http.get<RespuestaDetalle>('https://videojuego-c6321-default-rtdb.firebaseio.com/.json/${id}');
      }
      
}

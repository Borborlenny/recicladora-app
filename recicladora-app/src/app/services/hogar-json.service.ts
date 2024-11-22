import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Hogar } from '../models/Hogar';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HogarJsonService {

  private jsonUrl: string = "http://localhost:3000/hogar";

  constructor(private http: HttpClient) { }

  //Obtener todos los Hogares
  obtenerHogares():Observable<Hogar[]>{
    return this.http.get<Hogar[]>(this.jsonUrl)
  }

  //Obtener busqueda de Usuarios
  obtenerHogarBusqueda(nombre?: string, tipo_vivienda?:string):Observable<Hogar[]>{
    return this.http.get<Hogar[]>(this.jsonUrl).pipe(
      map((hogares) =>
        hogares.filter((hogar) =>
          (nombre ? hogar.nombre.toLowerCase().includes(nombre.toLowerCase()):true) &&
          (tipo_vivienda ? hogar.tipo_vivienda.toLowerCase().includes(tipo_vivienda.toLowerCase()):true)
        )
      )
    );
  }

  //Agregar un Hogar
  agregarHogar(hogar: Hogar):Observable<Hogar>{
    return this.http.post<Hogar>(this.jsonUrl, hogar);
  }

  //actualizar un Hogar
  actualizarHogar(hogar: Hogar):Observable<Hogar>{
    const urlDeHogar = `${this.jsonUrl}/${hogar.id}`
    return this.http.put<Hogar>(urlDeHogar, hogar);
  }

  //eliminar un Hogar
  eliminarHogar(hogar: Hogar):Observable<void>{
    const urlDeHogar = `${this.jsonUrl}/${hogar.id}`
    return this.http.delete<void>(urlDeHogar);
  }
}

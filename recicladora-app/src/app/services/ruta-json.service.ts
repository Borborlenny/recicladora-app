import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ruta } from '../models/Ruta';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RutaJsonService {

  private jsonUrl: string = "http://localhost:3000/ruta";

  constructor(private http: HttpClient) { }

   //Obtener todos las Rutas
  obtenerRutas():Observable<Ruta[]>{
      return this.http.get<Ruta[]>(this.jsonUrl)
  }

  //Obtener busqueda de Usuarios
  obtenerRutaBusqueda(origen?: string, destino?: string):Observable<Ruta[]>{
    return this.http.get<Ruta[]>(this.jsonUrl).pipe(
      map((rutas) =>
        rutas.filter((ruta) =>
          (origen ? ruta.origen.toLowerCase().includes(origen.toLowerCase()):true) &&
          (destino ? ruta.destino.toLowerCase().includes(destino.toLowerCase()):true)
        )
      )
    );
  }

  //Agregar un Ruta
  agregarRuta(ruta: Ruta):Observable<Ruta>{
    return this.http.post<Ruta>(this.jsonUrl, ruta);
  }

  //actualizar un Ruta
  actualizarRuta(ruta: Ruta):Observable<Ruta>{
    const urlDeRuta = `${this.jsonUrl}/${ruta.id}`
    return this.http.put<Ruta>(urlDeRuta, ruta);
  }

  //eliminar un Ruta
  eliminarRuta(ruta: Ruta):Observable<void>{
    const urlDeRuta = `${this.jsonUrl}/${ruta.id}`
    return this.http.delete<void>(urlDeRuta);
  }
}

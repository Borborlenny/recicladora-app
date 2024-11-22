import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/Usuario';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioJsonService {

  private jsonUrl: string ="http://localhost:3000/usuario"

  constructor(private http: HttpClient) { }

  //Obtener todos los Usuarios
  obtenerUsuarios():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.jsonUrl)
  }

  //Obtener busqueda de Usuarios
  obtenerUsuarioBusqueda(nombre?: string, email?:string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.jsonUrl).pipe(
      map((usuarios) =>
        usuarios.filter((usuario) =>
          (nombre ? usuario.nombre.toLowerCase().includes(nombre.toLowerCase()):true) &&
          (email ? usuario.email.toLowerCase().includes(email.toLowerCase()):true)
        )
      )
    );
  }

  //Agregar un Usuario
  agregarUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.jsonUrl, usuario);
  }

  //actualizar un Usuario
  actualizarUsuario(usuario: Usuario):Observable<Usuario>{
    const urlDeUsuario = `${this.jsonUrl}/${usuario.id}`
    return this.http.put<Usuario>(urlDeUsuario, usuario);
  }

  //eliminar un Usuario
  eliminarUsuario(usuario: Usuario):Observable<void>{
    const urlDeUsuario = `${this.jsonUrl}/${usuario.id}`
    return this.http.delete<void>(urlDeUsuario);
  }
}

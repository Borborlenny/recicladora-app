import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioJsonService {
  private jsonUrl: string ="http://localhost:3000/usuario"
  constructor(private http: HttpClient) { }
  obtenerUsuarios():Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.jsonUrl)
  }
}

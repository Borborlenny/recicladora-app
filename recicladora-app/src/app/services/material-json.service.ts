import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Material } from '../models/Material';

@Injectable({
  providedIn: 'root'
})
export class MaterialJsonService {
  private jsonUrl: string = "http://localhost:3000/material"
  constructor(private http: HttpClient) { }
  obtenerMateriales():Observable<Material[]>{
    return this.http.get<Material[]>(this.jsonUrl)
  }
}
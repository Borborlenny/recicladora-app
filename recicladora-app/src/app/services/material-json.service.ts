import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Material } from '../models/Material';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterialJsonService {
  private jsonUrl: string = "http://localhost:3000/material"
  
  constructor(private http: HttpClient) { }
 
  //Obtener todos los Materiales
  obtenerMateriales():Observable<Material[]>{
    return this.http.get<Material[]>(this.jsonUrl)
  }

//Obtener busqueda de Materiales
obtenerMaterialBusqueda(tipo_material: string):Observable<Material[]>{
  return this.http.get<Material[]>(this.jsonUrl).pipe(
    map((materiales) =>
      materiales.filter((material) =>
        (tipo_material ? material.tipo_material.toLowerCase().includes(tipo_material.toLowerCase()):true)
      )
    )
  );
}

//Agregar un Materiales
agregarMaterial(material: Material):Observable<Material>{
  return this.http.post<Material>(this.jsonUrl, material);
}

//actualizar un Materiales
actualizarMaterial(material: Material):Observable<Material>{
  const urlDeMaterial = `${this.jsonUrl}/${material.id}`
  return this.http.put<Material>(urlDeMaterial, material);
}

//eliminar un Materiales
eliminarMaterial(material: Material):Observable<void>{
  const urlDeMaterial = `${this.jsonUrl}/${material.id}`
  return this.http.delete<void>(urlDeMaterial);
}
}
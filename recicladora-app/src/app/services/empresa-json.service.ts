import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Empresa } from '../models/Empresa';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaJsonService {
  private jsonUrl: string = "http://localhost:3000/empresa"
  constructor(private http: HttpClient) { }
  obtenerEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.jsonUrl)
  }

   //Obtener todos los Empresa
   obtenerEmpresa():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.jsonUrl)
}

//Obtener busqueda de Empresa
obtenerEmpresaBusqueda(nombre_empresa: string):Observable<Empresa[]>{
  return this.http.get<Empresa[]>(this.jsonUrl).pipe(
    map((empresa) =>
      empresa.filter((empresa) =>
        (nombre_empresa ? empresa.nombre_empresa.toLowerCase().includes(nombre_empresa.toLowerCase()):true)
      )
    )
  );
}

//Agregar un Empresa
agregarEmpresa(empresa: Empresa):Observable<Empresa>{
  return this.http.post<Empresa>(this.jsonUrl, empresa);
}

//actualizar un Empresa
actualizarEmpresa(empresa: Empresa):Observable<Empresa>{
  const urlDeEmpresa = `${this.jsonUrl}/${empresa.id}`
  return this.http.put<Empresa>(urlDeEmpresa, empresa);
}

//eliminar un Empresa
eliminarEmpresa(empresa: Empresa):Observable<void>{
  const urlDeEmpresa = `${this.jsonUrl}/${empresa.id}`
  return this.http.delete<void>(urlDeEmpresa);
}
}

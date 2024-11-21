import { Component } from '@angular/core';
import { EmpresaJsonService } from '../../services/empresa-json.service';
import { Empresa } from '../../models/Empresa';

@Component({
  selector: 'app-crud-empresa',
  imports: [],
  templateUrl: './crud-empresa.component.html',
  styleUrl: './crud-empresa.component.css'
})
export class CrudEmpresaComponent {
  constructor(private empresaService: EmpresaJsonService){

  }
  ngOnInit(): void {
    this.obtenerEmpresas()
  }

  obtenerEmpresas(){
    this.empresaService.obtenerEmpresas().subscribe((data: Empresa[])=>{
      console.log(data)
    })
  }

}

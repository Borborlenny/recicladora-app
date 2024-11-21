import { Component } from '@angular/core';
import { MaterialJsonService } from '../../services/material-json.service';
import { Material } from '../../models/Material';

@Component({
  selector: 'app-crud-material',
  imports: [],
  templateUrl: './crud-material.component.html',
  styleUrl: './crud-material.component.css'
})
export class CrudMaterialComponent {
  constructor(private materialService: MaterialJsonService){

  }

  ngOnInit(): void {
    this.obtenerMateriales()
  }

  obtenerMateriales(){
    this.materialService.obtenerMateriales().subscribe((data: Material[])=>{
        console.log(data)
    })
  }
}

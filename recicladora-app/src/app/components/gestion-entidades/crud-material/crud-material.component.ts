import { Component, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { DialogData, MyDialogComponent } from '../../shared/my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Material } from '../../../models/Material';
import { MaterialJsonService } from '../../../services/material-json.service';

@Component({
  selector: 'app-crud-material',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, MatSelect,
    MatCheckboxModule, MatPaginator, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './crud-material.component.html',
  styleUrl: './crud-material.component.css'
})
export class CrudMaterialComponent {
  title:string = "Gestión de Materiales";
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Material>()
  @ViewChild(MatPaginator) paginador!: MatPaginator

  // Variable que controla el modo oscuro
  isDarkMode: boolean = false;

  toggleDarkMode() {
    // Alterna entre modo claro y oscuro
    this.isDarkMode = !this.isDarkMode;
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginador
  }

  constructor(private materialService: MaterialJsonService, private fb: FormBuilder, private mydialog: MatDialog){

  }

  ngOnInit(): void {
    this.obtenerMateriales()

    this.form =this.fb.group({
      tipo_material: ["", [Validators.required]],
      peso_promedio: ["", [Validators.required]],
      cantidad_promedio: ["", [Validators.required]],
      reciclable: ["", [Validators.required]],
    })
  }

  obtenerMateriales(){
    this.materialService.obtenerMateriales().subscribe((data: Material[])=>{
        this.dataSource.data = data;
    })
  }

  search(searchInput: HTMLInputElement){
    if(searchInput.value){
      this.materialService.obtenerMaterialBusqueda(searchInput.value).subscribe((datos: Material[]) => {
        this.dataSource.data = datos;
      })
    }
    else{
      this.obtenerMateriales();
    }
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }

    //Obtener los datos de los controles del formulario
    const newMaterial: Material = this.form.value;

    if(this.isEditMode){ //Actualizar Material
      newMaterial.id = this.currentId;
      this.materialService.actualizarMaterial(newMaterial).subscribe((actualizarMaterial)=>{
        alert("Material fue editado exitosamente");
        this.obtenerMateriales(); //Actualizar el dataSource
      });
    }
    else{ //Agregar Material
      this.materialService.agregarMaterial(newMaterial).subscribe((agregarMaterial)=>{
        alert("Material fue agregado exitosamente");
        this.obtenerMateriales(); //Actualizar el dataSource
      });
    }

    this.clearForm();
  }

  clearForm(){
    this.form.reset({
      tipo_material: "",
      peso_promedio: "",
      cantidad_promedio: "",
      reciclable: ""
    })

    this.currentId = 0;
    this.isEditMode = false;
  }

  eliminar(material:Material){

    const dialogRef = this.mydialog.open(MyDialogComponent,{
      data:{
        titulo: "Eliminación de Material",
        contenido: "¿Estas seguro de eliminar el material de "+material.tipo_material+"?"
      }as DialogData,
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result==='Aceptar'){
        this.materialService.eliminarMaterial(material).subscribe(()=>{
          alert("Eliminado exitosamente.")
          this.obtenerMateriales();
        })
      }
      else if(result==='Cancelar'){

      }
    })
  }

  editar(material:Material){
    this.isEditMode = true;

    if(material && material.id){
      this.currentId = material.id;
    }
    else{
      console.log("material o el id del material estan undefined")
    }

    this.form.setValue({
      tipo_material: material.tipo_material,
      peso_promedio: material.peso_promedio,
      cantidad_promedio: material.cantidad_promedio,
      reciclable: material.reciclable
    })
  }
}

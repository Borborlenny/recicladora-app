import { Component, ViewChild } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DialogData, MyDialogComponent } from '../../shared/my-dialog/my-dialog.component';
import { Ruta } from '../../../models/Ruta';
import { RutaJsonService } from '../../../services/ruta-json.service';

@Component({
  selector: 'app-crud-ruta',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, MatSelect,
    MatCheckboxModule, MatPaginator, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './crud-ruta.component.html',
  styleUrl: './crud-ruta.component.css'
})
export class CrudRutaComponent {
  title:string = "Gestión de Rutas";
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Ruta>()
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

  constructor(private rutaService: RutaJsonService, private fb: FormBuilder, private mydialog: MatDialog){

  }

  ngOnInit(): void {
    this.obtenerRutas()

    this.form =this.fb.group({
      origen: ["", [Validators.required]],
      destino: ["", [Validators.required]],
      distancia: ["", [Validators.required]],
      duracion: ["", [Validators.required]],
      estado: ["", [Validators.required]],
      alta_prioridad: ["", [Validators.required]]
    })
  }

  obtenerRutas(){
    this.rutaService.obtenerRutas().subscribe((data: Ruta[])=>{
        this.dataSource.data = data;
    })
  }

  search(searchInput: HTMLInputElement){
    if(searchInput.value){
      this.rutaService.obtenerRutaBusqueda(searchInput.value).subscribe((datos: Ruta[]) => {
        this.dataSource.data = datos;
      })
    }
    else{
      this.obtenerRutas();
    }
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }

    //Obtener los datos de los controles del formulario
    const newRuta: Ruta = this.form.value;

    if(this.isEditMode){ //Actualizar ruta
      newRuta.id = this.currentId;
      this.rutaService.actualizarRuta(newRuta).subscribe((actualizarRuta)=>{
        alert("Ruta fue editada exitosamente");
        this.obtenerRutas(); //Actualizar el dataSource
      });
    }
    else{ //Agregar ruta
      this.rutaService.agregarRuta(newRuta).subscribe((agregarRuta)=>{
        alert("Ruta fue agregada exitosamente");
        this.obtenerRutas(); //Actualizar el dataSource
      });
    }

    this.clearForm();
  }

  clearForm(){
    this.form.reset({
      origen: "",
      destino: "",
      distancia: "",
      duracion: "",
      estado: "",
      alta_prioridad: ""
    })

    this.currentId = 0;
    this.isEditMode = false;
  }

  eliminar(ruta:Ruta){

    const dialogRef = this.mydialog.open(MyDialogComponent,{
      data:{
        titulo: "Eliminación de Ruta",
        contenido: "¿Estas seguro de eliminar la ruta con origen en '"+ruta.origen+"' y con destino a '"+ruta.destino+"'?"
      }as DialogData,
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result==='Aceptar'){
        this.rutaService.eliminarRuta(ruta).subscribe(()=>{
          alert("Eliminado exitosamente.")
          this.obtenerRutas();
        })
      }
      else if(result==='Cancelar'){
      }
    })
  }

  editar(ruta:Ruta){
    this.isEditMode = true;

    if(ruta && ruta.id){
      this.currentId = ruta.id;
    }
    else{
      console.log("Ruta o el id del ruta estan undefined")
    }

    this.form.setValue({
      origen: ruta.origen,
      destino: ruta.destino,
      distancia: ruta.distancia,
      duracion: ruta.duracion,
      estado: ruta.estado,
      alta_prioridad: ruta.alta_prioridad
    })
  }
}

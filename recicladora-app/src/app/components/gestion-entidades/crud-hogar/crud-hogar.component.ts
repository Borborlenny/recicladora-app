import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { CommonModule, DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DialogData, MyDialogComponent } from '../../shared/my-dialog/my-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HogarJsonService } from '../../../services/hogar-json.service';
import { Hogar } from '../../../models/Hogar';


@Component({
  selector: 'app-crud-hogar',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule,
    MatCheckboxModule, MatPaginator, MatTableModule, MatButtonModule, CommonModule,
    MatNativeDateModule, MatDatepickerModule,MatOption, MatSelect, DatePipe],
  templateUrl: './crud-hogar.component.html',
  styleUrl: './crud-hogar.component.css'
})
export class CrudHogarComponent {
    title:string = "Gestión de Hogares";
    form!: FormGroup
    isEditMode: boolean = false
    currentId!: number
    dataSource = new MatTableDataSource<Hogar>()
    @ViewChild(MatPaginator) paginador!: MatPaginator

    // Variable que controla el modo oscuro
    isDarkMode: boolean = false;

    fechaMinima:Date = new Date(1940,0,1)
    fechaMaxima:Date = new Date()//Fecha actual

    toggleDarkMode() {
      // Alterna entre modo claro y oscuro
      this.isDarkMode = !this.isDarkMode;
    }

    ngAfterViewInit(): void {
      this.dataSource.paginator= this.paginador
    }

    constructor(private hogarService: HogarJsonService, private fb: FormBuilder, private mydialog: MatDialog){

    }

    ngOnInit(): void {
      this.obtenerHogares()

      this.form =this.fb.group({
        nombre: ["", [Validators.required]],
        tipo_vivienda:["", [Validators.required]],
        direccion:["",[Validators.required]],
        referencia:[""],
        telefono:["",[Validators.required]],
        email: ["", [Validators.required]],
        fecha_registro:["", [Validators.required]]
      })
    }

    obtenerHogares(){
      this.hogarService.obtenerHogares().subscribe((data: Hogar[])=>{
          this.dataSource.data = data;
      })
    }

    search(searchInput: HTMLInputElement){
      if(searchInput.value){
        this.hogarService.obtenerHogarBusqueda(searchInput.value).subscribe((datos: Hogar[]) => {
          this.dataSource.data = datos;
        })
      }
      else{
        this.obtenerHogares();
      }
    }

    onSubmit(){
      if(this.form.invalid){
        return;
      }

      //Obtener los datos de los controles del formulario
      const newHogar: Hogar = this.form.value;

      if(this.isEditMode){ //Actualizar hogar
        newHogar.id = this.currentId;
        this.hogarService.actualizarHogar(newHogar).subscribe((actualizarHogar)=>{
          alert("Hogar fue editada exitosamente");
          this.obtenerHogares(); //Actualizar el dataSource
        });
      }
      else{ //Agregar hogar
        this.hogarService.agregarHogar(newHogar).subscribe((agregarHogar)=>{
          alert("Hogar fue agregada exitosamente");
          this.obtenerHogares(); //Actualizar el dataSource
        });
      }

      this.clearForm();
    }

    clearForm(){
      this.form.reset({
        nombre: "",
        tipo_vivienda: "",
        direccion: "",
        referencia: "",
        telefono: "",
        email: "",
        fecha_registro: ""
      })

      this.currentId = 0;
      this.isEditMode = false;
    }

    eliminar(hogar:Hogar){

      const dialogRef = this.mydialog.open(MyDialogComponent,{
        data:{
          titulo: "Eliminación de Hogar",
          contenido: "¿Estas seguro de eliminar el hogar de "+hogar.nombre+"?"
        }as DialogData,
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result==='Aceptar'){
          this.hogarService.eliminarHogar(hogar).subscribe(()=>{
            alert("Eliminado exitosamente.")
            this.obtenerHogares();
          })
        }
        else if(result==='Cancelar'){

        }
      })
    }

    editar(hogar:Hogar){
      this.isEditMode = true;

      if(hogar && hogar.id){
        this.currentId = hogar.id;
      }
      else{
        console.log("Hogar o el id del hogar estan undefined")
      }

      this.form.setValue({
        nombre: hogar.nombre,
        tipo_vivienda: hogar.tipo_vivienda,
        direccion: hogar.direccion,
        referencia: hogar.referencia,
        telefono: hogar.telefono,
        email: hogar.email,
        fecha_registro: hogar.fecha_registro
      })
    }
}

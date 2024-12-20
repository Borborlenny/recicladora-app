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
import { MatDialog } from '@angular/material/dialog';
import { Empresa } from '../../../models/Empresa';
import { EmpresaJsonService } from '../../../services/empresa-json.service';
import { DialogData, MyDialogComponent } from '../../shared/my-dialog/my-dialog.component';

@Component({
  selector: 'app-crud-empresa',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, MatSelect,
    MatCheckboxModule, MatPaginator, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './crud-empresa.component.html',
  styleUrl: './crud-empresa.component.css'
})
export class CrudEmpresaComponent {
  title:string = "Gestión de Empresa";
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Empresa>()
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

  constructor(private empresaService: EmpresaJsonService, private fb: FormBuilder, private mydialog: MatDialog){

  }

  ngOnInit(): void {
    this.obtenerEmpresa()

    this.form =this.fb.group({
      nombre_empresa: ["", [Validators.required, Validators.maxLength(25), Validators.minLength(6), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ. ]+$/)]],
      tipo_empressa: ["", [Validators.required]],
      telefono: ["",[Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern(/^[0-9]+$/)]],
      direccion: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      convenio_activo: [""],
      materiales_reciclables: ["", [Validators.required]],
      fecha_registro: [new Date().toISOString()]
    })
  }

  obtenerEmpresa(){
    this.empresaService.obtenerEmpresa().subscribe((data: Empresa[])=>{
        this.dataSource.data = data;
    })
  }

  search(searchInput: HTMLInputElement){
    if(searchInput.value){
      this.empresaService.obtenerEmpresaBusqueda(searchInput.value).subscribe((datos: Empresa[]) => {
        this.dataSource.data = datos;
      })
    }
    else{
      this.obtenerEmpresa();
    }
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }

    //Obtener los datos de los controles del formulario
    const newEmpresa: Empresa = this.form.value;

    if(this.isEditMode){ //Actualizar Empresa
      newEmpresa.id = this.currentId;
      this.empresaService.actualizarEmpresa(newEmpresa).subscribe((actualizarEmpresa)=>{
        alert("Empresa fue editada exitosamente");
        this.obtenerEmpresa(); //Actualizar el dataSource
      });
    }
    else{ //Agregar Empresa
      this.empresaService.agregarEmpresa(newEmpresa).subscribe((agregarEmpresa)=>{
        alert("Empresa fue agregada exitosamente");
        this.obtenerEmpresa(); //Actualizar el dataSource
      });
    }

    this.clearForm();
  }

  clearForm(){
    this.form.reset({
      nombre_empresa: "",
      tipo_empressa: "",
      telefono: "",
      direccion: "",
      email: "",
      convenio_activo: "",
      materiales_reciclables: "",
      fecha_registro: ""
    })

    this.currentId = 0;
    this.isEditMode = false;
  }

  eliminar(empresa:Empresa){

    const dialogRef = this.mydialog.open(MyDialogComponent,{
      data:{
        titulo: "Eliminación de Empresa",
        contenido: "¿Estas seguro de eliminar la empresa "+empresa.nombre_empresa+"?"
      },
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result==='Aceptar'){
        this.empresaService.eliminarEmpresa(empresa).subscribe(()=>{
          alert("Eliminado exitosamente.")
          this.obtenerEmpresa();
        })
      }
      else if(result==='Cancelar'){

      }
    })
  }

  editar(empresa:Empresa){
    this.isEditMode = true;

    if(empresa && empresa.id){
      this.currentId = empresa.id;
    }
    else{
      console.log("Empresa o el id del empresa estan undefined")
    }

    this.form.setValue({
      nombre_empresa: empresa.nombre_empresa,
      tipo_empressa: empresa.tipo_empressa,
      telefono: empresa.telefono,
      direccion: empresa.direccion,
      email: empresa.email,
      convenio_activo: empresa.convenio_activo,
      materiales_reciclables: empresa.materiales_reciclables,
      fecha_registro: empresa.fecha_registro
    })
  }
}

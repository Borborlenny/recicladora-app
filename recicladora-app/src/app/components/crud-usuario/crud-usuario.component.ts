import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioJsonService} from '../../services/usuario-json.service';
import {Usuario} from '../../models/Usuario';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-usuario',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, MatSelect,
    MatCheckboxModule, MatPaginator, MatTableModule, MatButtonModule, CommonModule ],
  templateUrl: './crud-usuario.component.html',
  styleUrl: './crud-usuario.component.css'
})
export class CrudUsuarioComponent implements OnInit, AfterViewInit{
  title:string = "Gestión de Usuarios";
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Usuario>()
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

  constructor(private usuarioService: UsuarioJsonService, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.obtenerUsuarios()

    this.form =this.fb.group({
      nombre: ["", [Validators.required]],
      email: ["", [Validators.required]],
      rol: ["", [Validators.required]],
      estado: ["", [Validators.required]]
    })
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe((data: Usuario[])=>{
        this.dataSource.data = data;
    })
  }

  search(searchInput: HTMLInputElement){
    if(searchInput.value){
      this.usuarioService.obtenerUsuarioBusqueda(searchInput.value).subscribe((datos: Usuario[]) => {
        this.dataSource.data = datos;
      })
    }
    else{
      this.obtenerUsuarios();
    }
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }

    //Obtener los datos de los controles del formulario
    const newUsuario: Usuario = this.form.value;

    if(this.isEditMode){ //Actualizar hogar
      newUsuario.id = this.currentId;
      this.usuarioService.actualizarUsuario(newUsuario).subscribe((actualizarUsuario)=>{
        alert("Usuario fue editada exitosamente");
        this.obtenerUsuarios(); //Actualizar el dataSource
      });
    }
    else{ //Agregar hogar
      this.usuarioService.agregarUsuario(newUsuario).subscribe((agregarUsuario)=>{
        alert("Usuario fue agregada exitosamente");
        this.obtenerUsuarios(); //Actualizar el dataSource
      });
    }

    this.clearForm();
  }

  clearForm(){
    this.form.reset({
      nombre: "",
      email: "",
      rol: "",
      estado: ""
    })

    this.currentId = 0;
    this.isEditMode = false;
  }

  eliminar(usuario:Usuario){
    this.usuarioService.eliminarUsuario(usuario).subscribe(()=>{
      alert("Eliminado exitosamente.")
      this.obtenerUsuarios();
    })
  }

  editar(usuario:Usuario){
    this.isEditMode = true;

    if(usuario && usuario.id){
      this.currentId = usuario.id;
    }
    else{
      console.log("Usuario o el id del usuario estan undefined")
    }

    this.form.setValue({
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      estado: usuario.estado
    })
  }
}

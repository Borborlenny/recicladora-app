import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UsuarioJsonService} from '../../services/usuario-json.service';
import {Usuario} from '../../models/Usuario';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator';
import {MatFormField} from '@angular/material/form-field';
import {MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-crud-usuario',
  imports: [MatFormField, MatLabel, ReactiveFormsModule, MatInputModule, MatOption, MatSelect, MatCheckboxModule],
  templateUrl: './crud-usuario.component.html',
  styleUrl: './crud-usuario.component.css'
})
export class CrudUsuarioComponent implements OnInit, AfterViewInit{
  form!: FormGroup
  isEditMode: boolean = false
  currentId!: number
  dataSource = new MatTableDataSource<Usuario>()
  @ViewChild(MatPaginator) paginador!: MatPaginator

  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginador
  }

  constructor(private usuarioService: UsuarioJsonService, private fb: FormBuilder){

  }
 
  ngOnInit(): void {
    this.obtenerUsuarios()

    this.form =this.fb.group({
      nombre: [""],
      email: [""],
      rol: [""],
      estado: [""]
    })
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios().subscribe((data: Usuario[])=>{
        console.log(data)
    })
  }
}

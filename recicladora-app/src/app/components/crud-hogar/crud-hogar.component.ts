import { Component } from '@angular/core';
import { HogarJsonService } from '../../services/hogar-json.service';
import { Hogar } from '../../models/Hogar';

@Component({
  selector: 'app-crud-hogar',
  imports: [],
  templateUrl: './crud-hogar.component.html',
  styleUrl: './crud-hogar.component.css'
})
export class CrudHogarComponent {
  constructor(private hogarService: HogarJsonService){

  }
  ngOnInit(): void {
    this.obtenerHogares()
  }

  obtenerHogares(){
    this.hogarService.obtenerHogares().subscribe((data: Hogar[])=>{
      console.log(data)
    })
  }
}

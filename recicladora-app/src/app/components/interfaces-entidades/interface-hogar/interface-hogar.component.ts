import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Hogar } from '../../../models/Hogar';
import { HogarJsonService } from '../../../services/hogar-json.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-interface-hogar',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet, RouterLink],
  templateUrl: './interface-hogar.component.html',
  styleUrl: './interface-hogar.component.css'
})
export class InterfaceHogarComponent implements OnInit{
  titleHogar="Listado de Hogares";
  hogares: Hogar[] = [];

  constructor(private miServicioHogar:HogarJsonService){}

  ngOnInit():void{
    this.obtenerHogares()
  }

 obtenerHogares():void{
    this.miServicioHogar.obtenerHogares().subscribe((data: Hogar[])=>{
    this.hogares = data;
      console.log(this.hogares[0]);
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDivider} from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-info',
  imports: [MatSlideToggleModule, FormsModule, MatIconModule, CommonModule, MatCardModule, MatDivider,MatChipsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  title = 'Plataforma de Coordinación de Reciclaje Domiciliario ♻️'
  integrantes:string[] = ['Maldonado Lopez Saul Alejandro (Líder)','Borbor Sanchez Lenny Josue',
  'Romero Diaz Andy Adrian','Yagual Alarcon Mariana De Jesus','Lopez Rodriguez Anthony Elias']
}

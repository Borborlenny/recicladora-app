import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDivider} from '@angular/material/divider'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatSlideToggleModule, FormsModule, MatIconModule, CommonModule, MatCardModule, MatDivider,MatChipsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  titleLogo = 'ReciClean';
  title = 'Plataforma de Coordinación de Reciclaje Domiciliario ♻️'
  isAnim:boolean = false;
  integrantes:string[] = ['Maldonado Lopez Saul Alejandro (Líder)','Borbor Sanchez Lenny Josue',
  'Romero Diaz Andy Adrian','Yagual Alarcon Mariana De Jesus','Lopez Rodriguez Anthony Elias']

  darkMode = signal<boolean>(false);

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  toogleAnim(){
    this.isAnim = !this.isAnim;
  }

}

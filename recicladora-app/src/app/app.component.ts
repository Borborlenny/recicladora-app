import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  titleLogo = 'ReciClean';
  isAnim:boolean = false;
  darkMode = signal<boolean>(false);

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  toogleAnim(){
    this.isAnim = !this.isAnim;
  }

}

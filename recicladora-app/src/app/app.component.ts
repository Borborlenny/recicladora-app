import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatSlideToggleModule, FormsModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'ReciClean';
  isAnim:boolean = false;

  darkMode = signal<boolean>(false);

  @HostBinding('class.dark') get mode(){
    return this.darkMode();
  }

  toogleAnim(){
    this.isAnim = !this.isAnim;
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { ToplineComponent } from "./topline/topline.component";







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent,  ToplineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}

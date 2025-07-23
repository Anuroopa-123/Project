import { Component, AfterViewInit } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-topline',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './topline.component.html',
  styleUrl: './topline.component.css',
})
export class ToplineComponent {
  constructor() {}

  ngAfterViewInit(): void {
    this.updateDateTime();
  }

  // Function to update date and time
  updateDateTime() {
    setInterval(() => {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const formattedTime = date.toLocaleTimeString();

      const dateElement = document.getElementById('showdate');
      const timeElement = document.getElementById('showTime');

      // Ensure elements exist before modifying their content
      if (dateElement) {
        dateElement.textContent = formattedDate;
      }
      if (timeElement) {
        timeElement.textContent = formattedTime;
      }
    }, 1000); // Update every second
  }
}

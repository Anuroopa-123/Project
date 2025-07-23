import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    headerData: any;
  navbarActive = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadHeaderContent();
  }

  loadHeaderContent() {
    this.contentService.getHeaderContent().subscribe((data) => {
      this.headerData = data;
    });
  }

  // Placeholder for social media links function, adjust as needed.
  getSocialMediaLinks() {
    return [
      {
        name: 'Facebook',
        link: 'https://facebook.com',
        image_url: 'https://via.placeholder.com/30',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com',
        image_url: 'https://via.placeholder.com/30',
      },
      {
        name: 'Instagram',
        link: 'https://instagram.com',
        image_url: 'https://via.placeholder.com/30',
      },
    ];
  }
}

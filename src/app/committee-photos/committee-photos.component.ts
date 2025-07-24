import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-committee-photos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './committee-photos.component.html',
  styleUrl: './committee-photos.component.css',
})
export class CommitteePhotosComponent {
 selectedCategory: string = 'All'; // Default category
  selectedMediaType: string = '';
  filterApplied: boolean = false;
  activeMediaType: string = 'Image';
  mediaTypes: string[] = ['Image', 'Audio', 'Video'];
  programs: string[] = ['Program 1', 'Program 2', 'Program 3'];
  sections: string[] = ['Section 1', 'Section 2', 'Section 3'];
  categories: string[] = ['A', 'B', 'C'];

  images: any[] = [
    { category: 'A', src: 'assets/img/members1.jpg', alt: 'Member 1'},
    { category: 'A', src: 'assets/img/testimonials-1.jpg', alt: 'Testimonial 1' },
    { category: 'B', src: 'assets/img/members2.jpg', alt: 'Member 2' },
    { category: 'B', src: 'assets/img/testimonials-2.jpg', alt: 'Testimonial 2' },
    { category: 'C', src: 'assets/img/members3.jpg', alt: 'Member 3' },
    { category: 'C', src: 'assets/img/testimonials-3.jpg', alt: 'Testimonial 3' },
  ];

  filteredMedia: any[] = this.images;


  applyFilters() {
    this.filterApplied = true;
    this.filterMedia();
  }


  clearFilters() {
    this.selectedCategory = 'All';
    this.selectedMediaType = '';
    this.filterApplied = false;
    this.filteredMedia = this.images;
  }

 
filterMedia() {
  if (this.selectedMediaType === 'Image') {
    if (this.selectedCategory === 'All') {
      this.filteredMedia = this.images.filter(media => media.category === 'A' || media.category === 'B' || media.category === 'C');
    } else {
      this.filteredMedia = this.images.filter(image => image.category === this.selectedCategory);
    }
  } else if (this.selectedMediaType === 'Audio' || this.selectedMediaType === 'Video') {

    this.filteredMedia = []; 
  } else {
  
    if (this.selectedCategory === 'All') {
      this.filteredMedia = this.images;
    } else {
      this.filteredMedia = this.images.filter(image => image.category === this.selectedCategory);
    }
  }
}



  setMediaType(type: string) {
    this.selectedMediaType = type;
  }
}

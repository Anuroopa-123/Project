import {
  Component,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
  OnInit,
  AfterViewChecked,
} from '@angular/core';
import { UnionStateRelationsComponent } from '../union-state-relations/union-state-relations.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [UnionStateRelationsComponent, FormsModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  
  linksData = {
    announcements1: [
      { title: 'Announcement 1', isNew: true },
      { title: 'Announcement 2', isNew: false }
    ],
    announcements2: [
      { title: 'Event 1', isNew: true },
      { title: 'Event 2', isNew: false }
    ],
    importantLinks: [
      { title: 'Links to Historic Announcements' },
      { title: 'Constitution of India – India Code Website', url: 'https://www.indiacode.nic.in/' },
      { title: 'Constituent Assembly Debates', url: 'https://cadindia.clpr.org.in/' },
      { title: 'Federal Setup in Other Countries', url: '#federal-setup' },
      { title: 'Union Govt. Finance Commission Reports', url: '#finance-commission-reports' }
    ]
  };

  constructor() { }

 ngOnInit(): void {
    // Initialize Swiper when the component is loaded
    const swiper = new Swiper('.swiper-container', {
      loop: true, // Infinite loop
      autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false, // Continue autoplay on interaction
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable clicking for bullets
      },
    });
  }
  handleLinkClick(item: any) {
    console.log('Item clicked:', item);
    if (item.url) {
      window.open(item.url, '_blank');
    }
  }
}
  // this.contentService.getMembers().subscribe((response) => {
  //   console.log('Members response:', response);
  //   if (response.status === 'success' && response.data.length > 0) {
  //     this.members = response.data.map((item: any) => ({
  //       name: item.title,
  //       description: item.description,
  //       image: item.news_image,
  //       date: item.date,
  //       role: item.role,
  //     }));
  //      console.log('Mapped members:', this.members);
  //     this.cdr.detectChanges();
  //   } else {
  //     console.log('No members found or failed to load members');
  //   }
  // });


// ngAfterViewChecked() {
//   if (this.videoUrl && this.heroVideo && !this.hasTriedPlay) {
//     this.hasTriedPlay = true;
//     this.tryPlayVideo();
//   }
// }

// tryPlayVideo() {
//   const videoEl = this.heroVideo.nativeElement;
//   if (!videoEl) return;

//   videoEl.muted = true;
//   videoEl.play().catch((error) => {
//     console.warn('Autoplay prevented:', error);
//     this.addUserInteractionToPlay(videoEl);
//   });
// }

// addUserInteractionToPlay(videoEl: HTMLVideoElement) {
//   const events = ['click', 'touchstart', 'keydown'];
//   const playOnUserGesture = () => {
//     videoEl
//       .play()
//       .catch((err) =>
//         console.warn('Play failed after user interaction:', err)
//       );
//     events.forEach((event) =>
//       window.removeEventListener(event, playOnUserGesture)
//     );
//   };
//   events.forEach((event) =>
//     window.addEventListener(event, playOnUserGesture)
//   );
// }

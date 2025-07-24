import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Swiper } from 'swiper'; 
import 'swiper/swiper-bundle.css'; 

@Component({
  selector: 'app-union-state-relations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './union-state-relations.component.html',
  styleUrl: './union-state-relations.component.css',
})
export class UnionStateRelationsComponent implements OnInit, OnDestroy {
  quotes = [
    {
      text: '"We ask not for separation, but for rightful decentralization. Unity must not crush identity."',
      author: 'Thiru. C.N. Annadurai',
      position: 'Former Chief Minister of Tamil Nadu (1967–1969)',
    },
    {
      text: '"Language is a bridge, not a barrier. Let it be a choice, not a rule. Respecting tongues unites hearts."',
      author: 'Thiru. M. Karunanidhi',
      position: 'Former Chief Minister of Tamil Nadu (1969–2011)',
    },
    {
      text: '"True democracy comes from empowering states to reflect the diverse aspirations of the people."',
      author: 'Thiru. K. Kamaraj',
      position: 'Former Chief Minister of Tamil Nadu (1954–1963)',
    },
  ];

  currentIndex = 0;
  intervalId: any;

  
   ngOnInit() {
    // Initialize Swiper with smooth transition effect and pagination
    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,  // Auto change slide every 5 seconds
      },
      effect: 'slide',  // Default slide transition effect
      speed: 800,       // Transition speed
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  ngOnDestroy() {
    // Cleanup Swiper instance if needed
  }
}

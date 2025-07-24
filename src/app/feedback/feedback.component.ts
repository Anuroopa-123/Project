import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

   feedbackData = {
    name: '',
    feedback: '',
    file: null,
  };

  @Output() submitFeedback: EventEmitter<any> = new EventEmitter(); // Emit the feedback to parent component

  onSubmit(): void {
    // Emit feedback data to the parent component
    this.submitFeedback.emit(this.feedbackData);

    // Clear form after submission
    this.feedbackData = { name: '', feedback: '', file: null };
  }
}

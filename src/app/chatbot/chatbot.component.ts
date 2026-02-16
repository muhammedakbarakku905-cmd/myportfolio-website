import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="chatbot" style="border:1px solid #000; padding:10px; margin:20px;">
    <div class="chatbot">
      <div *ngFor="let msg of messages">
        <b>{{ msg.sender }}:</b> {{ msg.text }}
      </div>
      <input [(ngModel)]="userInput" placeholder="Type a message" />
      <button (click)="sendMessage()">Send</button>
    </div>
  `
})
export class ChatbotComponent {
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  userInput = '';

  sendMessage() {
    if (!this.userInput) return;
    this.messages.push({ sender: 'user', text: this.userInput });
    this.messages.push({ sender: 'bot', text: `Bot says: ${this.userInput}` });
    this.userInput = '';
  }
}

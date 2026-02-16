import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  userInput: string = '';

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ sender: 'user', text: this.userInput });

    // Add bot response
    this.messages.push({ sender: 'bot', text: `Bot says: ${this.userInput}` });

    // Clear input
    this.userInput = '';
  }
}

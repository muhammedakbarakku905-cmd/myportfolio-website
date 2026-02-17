import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div id="chatbot-widget">
    <div id="chatbot-header" (click)="toggleChat()">💬 Chat with Me</div>
    <div id="chatbot-body" *ngIf="chatVisible">
      <div id="chat-window">
        <div *ngFor="let msg of messages" [ngClass]="msg.sender">
          {{ msg.text }}
        </div>
      </div>
      <div class="chatbot-input-area">
        <input [(ngModel)]="userInput" placeholder="Type a message..." (keypress.enter)="sendMessage()" />
        <button (click)="sendMessage()">Send</button>
      </div>
    </div>
  </div>
  `,
  styles: [`
    /* Chatbot container */
    #chatbot-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 320px;
      font-family: 'Segoe UI', sans-serif;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 1000;
    }

    /* WhatsApp-style header */
    #chatbot-header {
      background-color: #25D366;
      color: white;
      font-weight: bold;
      text-align: center;
      padding: 12px;
      cursor: pointer;
    }

    /* Chat body */
    #chatbot-body {
      display: flex;
      flex-direction: column;
      height: 350px;
      background: #e5ddd5;
      border-top: 1px solid #ccc;
    }

    /* Chat window */
    #chat-window {
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    /* Input area */
    .chatbot-input-area {
      display: flex;
      padding: 5px;
      background: #f0f0f0;
      border-top: 1px solid #ccc;
    }

    .chatbot-input-area input {
      flex: 1;
      padding: 10px 15px;
      border-radius: 20px;
      border: 1px solid #ccc;
      outline: none;
    }

    .chatbot-input-area button {
      margin-left: 5px;
      background: #25D366;
      border: none;
      color: #fff;
      padding: 10px 16px;
      border-radius: 50%;
      cursor: pointer;
      font-weight: bold;
    }

    /* Messages */
    #chat-window div {
      max-width: 75%;
      padding: 10px 14px;
      border-radius: 20px;
      word-wrap: break-word;
      font-size: 0.95rem;
    }

    /* User messages */
    .user-msg {
      background: #DCF8C6;
      margin-left: auto;
      text-align: right;
    }

    /* Bot messages */
    .bot-msg {
      background: white;
      margin-right: auto;
      text-align: left;
    }

    /* Mobile hide chat by default */
    @media (max-width: 768px) {
      #chatbot-body { display: none; }
    }
  `]
})
export class ChatbotComponent {
  chatVisible = true; // show by default on desktop
  userInput = '';
  messages: { sender: 'user-msg' | 'bot-msg'; text: string }[] = [];

  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Add user message
    this.messages.push({ sender: 'user-msg', text: this.userInput });

    const input = this.userInput;
    this.userInput = '';

    // Bot reply
    setTimeout(() => {
      this.messages.push({ sender: 'bot-msg', text: this.botReply(input) });
    }, 400);
  }

  botReply(msg: string): string {
    const text = msg.toLowerCase();

    if(text.includes('hello') || text.includes('hi')) 
      return "Hello! I'm Muhammed Akbar. How can I help you today?";
    if(text.includes('about'))
      return "I am Muhammed Akbar MMK, an AI/ML Specialist and Full Stack Developer based in Dubai, UAE.";
    if(text.includes('skills'))
      return "Skills: Java, Python, Angular, Spring Boot, AI/ML, Deep Learning, NLP, TensorFlow, PyTorch.";
    if(text.includes('projects'))
      return "Projects: Student Management System, Traffic Sign Detection, AI Chatbot, Smart Surveillance System.";
    if(text.includes('experience'))
      return "Experience: Java Full Stack Developer Trainee and AI/ML Specialist Trainee.";
    if(text.includes('education'))
      return "Education: BCA in Computer Applications with focus on ML/AI.";
    if(text.includes('contact') || text.includes('phone'))
      return "Contact: +971 508910562, muhammedakbarakku905@gmail.com";
    if(text.includes('location'))
      return "Location: Dubai, United Arab Emirates.";

    return "I am a personal assistant bot for Muhammed Akbar. Ask about skills, projects, experience, education, contact info, or location.";
  }
}

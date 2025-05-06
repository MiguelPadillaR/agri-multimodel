import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private apiUrl = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) {}

  sendUserInput(userInput: string) {
    return this.http.post(`${this.apiUrl}/send-user-input`, { userInput });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatAssistantResponse } from '../models/chat-assistant.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatAssistantService {

  private apiUrl = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) {}

  sendUserInput(userInput: string): Observable<string> {
    return this.http.post<{ response: string }>(`${this.apiUrl}/send-user-input`, { user_input: userInput })
      .pipe(map(res => res.response));
  }
}


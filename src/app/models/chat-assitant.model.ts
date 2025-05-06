interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  loading?: boolean;
  revealProgress?: string;
}

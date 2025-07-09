import { create } from 'zustand';

type Message = {
  text: string;
  sender: 'user' | 'bot';
   citation?: {
    para: number;
    text: string;
    pdfUrl: string;
  };
};

interface AiSupportState {
  inputValue: string;
  messages: Message[];
  setInputValue: (val: string) => void;
  setMessages: (fn: (prev: Message[]) => Message[]) => void;
}

export const useAiSupportStore = create<AiSupportState>((set) => ({
  inputValue: '',
  messages: [],
  setInputValue: (val) => set({ inputValue: val }),
  setMessages: (fn) => set((state) => ({ messages: fn(state.messages) })),
}));

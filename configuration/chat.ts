import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, ${OWNER_NAME}'s AI assistant. /n I’m better known as Chatty Kathy because I’m here to help you talk the talk in coffee chats, networking, and mentorship. Struggling with what to say? Need a confidence boost before reaching out? Want to practice a coffee chat before the real deal? I’ve got you covered! From crafting the perfect message to simulating real conversations, I’ll make sure you’re ready to build meaningful and lasting connections.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response

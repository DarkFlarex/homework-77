export interface BookMessage {
  id: string;
  author: string;
  message: string;
}

export type BookMessageMutation = {
  author: string;
  message: string;
  image:string|null;
}
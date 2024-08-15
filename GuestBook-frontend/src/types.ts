export interface BookMessage {
  id:string;
  author: string;
  message: string;
  image:string|null;
}

export interface BookMessageMutation{
  author: string;
  message: string;
  image:string|null;
}
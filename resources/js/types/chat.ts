import { Paginate } from "./paginate";

export type Chat = {
  id: string;
  name: string;
  avatar: string;
  message_id: string;
  from_id: string;
  body: string;
  is_read: string;
  is_reply: string;
  is_online: string;
  created_at: string;
  chat_type: CHAT_TYPE;
};

export enum CHAT_TYPE {
  CHATS = "chats",
  GROUP_CHATS = "group_chats",
}

export type ChatPaginate = Paginate<Chat[]>;

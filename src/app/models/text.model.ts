export interface TextMsg {
  online: boolean;
  body: string;
  sender: 'them' | 'you';
  newLine?: boolean;
}

export interface TextMessenger {
  on: boolean;
  time?: string;
  typing?: boolean;
  msg: TextMsg[];
}

import { AppName } from './app-name.model';
import { Email } from './email.model';
import { Job } from './job.model';
import { SocialPost } from './social-post.model';
import { TextMessenger } from './text.model';

export interface AppData {
  name: AppName;
  emails?: Email[];
  jobs?: Job[];
  socialPosts?: SocialPost[];
}

export interface Image {
  path: string;
  effects?: 'fade' | 'cut';
}

export interface Notification {
  type: 'email' | 'missed-call' | 'text';
  alert: string;
  title: string;
  body?: string;
  when: string;
}
export interface Device {
  on: boolean;
  locked?: boolean;
  notification?: Notification;
  inCall?: boolean;
  calling?: boolean;
  time?: string;
  openApp?: AppName;
  apps?: AppData[];
  effects?: 'fade' | 'cut';
}
export interface TextBox {
  speaker?: string;
  body: string;
}
export interface Choice {
  id?: string;
  variable?: string;
  text: string;
}
export interface StoryBeat {
  debugScene?: string;
  ifVariable?: string;
  text?: TextBox;
  choice?: Choice[];
  bg?: Image;
  fg?: Image;
  bgm?: { name: string; fadeTime?: number };
  sfx?: { name: string; volume?: number };
  pc?: Device;
  phone?: Device;
  messenger?: TextMessenger;
  auto?: number;
  intro?: boolean;
}

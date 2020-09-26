import { StoryBeat } from './story-beat.model';

export interface StoryData {
  sequences: {
    choicePath?: string;
    beats: StoryBeat[];
  }[];
}

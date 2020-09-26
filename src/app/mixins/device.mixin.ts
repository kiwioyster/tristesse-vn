import { Story } from '../story';
import { AppName } from '../models/app-name.model';
import { AppData } from '../models/story-beat.model';

export function deviceMixin(BaseClass) {
  return class extends BaseClass {
    public appsData: AppData[];
    public openedApp: { app: AppData; device: 'pc' | 'phone' };
    public appName = AppName;
    public time: string;
    advStory(story: Story) {
      story.advStory();
    }

    openApp(e: AppData, device: 'pc' | 'phone') {
      this.openedApp = { app: e, device };
    }

    exit() {
      this.openedApp = undefined;
    }
  };
}

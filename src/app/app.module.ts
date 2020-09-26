import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { PcComponent } from './components/pc/pc.component';
import { PhoneComponent } from './components/phone/phone.component';
import { EmailAppComponent } from './device-apps/email-app/email-app.component';
import { TxtAppComponent } from './device-apps/txt-app/txt-app.component';
import { JobsAppComponent } from './device-apps/jobs-app/jobs-app.component';
import { SocialMediaAppComponent } from './device-apps/social-media-app/social-media-app.component';
import { CreditsComponent } from './components/credits/credits.component';
import { StoryViewComponent } from './components/story-view/story-view.component';
import { ImageComponent } from './components/image/image.component';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    ChoiceComponent,
    PcComponent,
    PhoneComponent,
    EmailAppComponent,
    TxtAppComponent,
    JobsAppComponent,
    SocialMediaAppComponent,
    CreditsComponent,
    StoryViewComponent,
    ImageComponent,
    AppIconComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, DragScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

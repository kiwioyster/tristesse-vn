import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryViewComponent } from './components/story-view/story-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: StoryViewComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

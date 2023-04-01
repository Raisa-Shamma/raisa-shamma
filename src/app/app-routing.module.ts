import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { EducationComponent } from './education/education.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PhotosComponent } from './photos/photos.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'raisa-shamma', redirectTo: '/', pathMatch: 'full'},
  {path: 'introduction', component: IntroductionComponent},
  { path: 'about', component: AboutComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'education', component: EducationComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'photos', component: PhotosComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

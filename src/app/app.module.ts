import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PhotosComponent } from './photos/photos.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkComponent } from './work-experience/components/work/work.component';
import { InstituteComponent } from './education/institute/institute.component';
import { AccomplishmentComponent } from './achievements/components/accomplishment/accomplishment.component';
import { SkillsComponent } from './skills/skills.component';
import { PublicationsComponent } from './publications/publications.component';
import { FeaturedInComponent } from './featured-in/featured-in.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SkillComponent } from './skills/components/skill/skill.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PublicationComponent } from './publications/components/publication/publication.component';
import { PublicationDescriptionComponent } from './publications/components/publication-description/publication-description.component';
import { PublicationIntroductionComponent } from './publications/components/publication-introduction/publication-introduction.component';
import { AddressComponent } from './contact/components/address/address.component';
import { MeComponent } from './me/me.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkExperienceComponent,
    EducationComponent,
    AchievementsComponent,
    PhotosComponent,
    IntroductionComponent,
    WorkComponent,
    InstituteComponent,
    AccomplishmentComponent,
    SkillsComponent,
    PublicationsComponent,
    FeaturedInComponent,
    ContactComponent,
    FooterComponent,
    SkillComponent,
    PublicationComponent,
    PublicationDescriptionComponent,
    PublicationIntroductionComponent,
    AddressComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 100
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

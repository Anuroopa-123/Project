import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { UnionStateRelationsComponent } from './union-state-relations/union-state-relations.component';
import { AboutCommitteeComponentComponent } from './about-committee-component/about-committee-component.component';
import { AssemblyPageComponent } from './assembly-page/assembly-page.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommitteePhotosComponent } from './committee-photos/committee-photos.component';
import { CommitteeReportsComponent } from './committee-reports/committee-reports.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'unionstaterelations', component: UnionStateRelationsComponent },
  { path: 'committee', component: AboutCommitteeComponentComponent },
  { path: 'assembly', component: AssemblyPageComponent },
  { path: 'press-release', component: PressreleaseComponent },
  { path: 'login', component: RegistrationComponent },
  { path: 'gallery', component: CommitteePhotosComponent },
  { path: 'report', component: CommitteeReportsComponent },
  { path: 'feedback', component: FeedbackComponent },
];

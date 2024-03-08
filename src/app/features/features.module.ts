import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FeaturesComponent } from './features.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    FeaturesComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, CoreModule],
})
export class FeaturesModule {}

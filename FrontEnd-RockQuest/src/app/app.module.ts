import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistryComponent } from './registry/registry.component';
import { QuestComponent } from './quest/quest.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgramComponent } from './program/program.component';
import { PrizeComponent } from './prize/prize.component';
import { ObjectComponent } from './object/object.component';
import { NpcComponent } from './npc/npc.component';
import { MissionComponent } from './mission/mission.component';
import { GroupComponent } from './group/group.component';
import { CityComponent } from './city/city.component';
import { CategoryComponent } from './category/category.component';
import { AchievementComponent } from './achievement/achievement.component';

/*_________________________________________________________MATERIAL_________________________________________________________*/

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    RegistryComponent,
    QuestComponent,
    ProgressComponent,
    ProgramComponent,
    PrizeComponent,
    ObjectComponent,
    NpcComponent,
    MissionComponent,
    GroupComponent,
    CityComponent,
    CategoryComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

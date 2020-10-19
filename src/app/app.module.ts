import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

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
import { FormsModule } from '@angular/forms';

/*_________________________________________________________MATERIAL_________________________________________________________*/

import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


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
    MatSliderModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

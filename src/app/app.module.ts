import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { QuizzEffects } from './store/quizz.effects';
import { appReducer } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    QuizzListComponent,
    QuizzComponent,
    QuestionComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([
      QuizzEffects
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

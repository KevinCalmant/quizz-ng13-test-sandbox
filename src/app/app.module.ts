import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { QuizzComponent } from './quizz/quizz.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [AppComponent, QuizzListComponent, QuizzComponent, QuestionComponent, AnswerComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

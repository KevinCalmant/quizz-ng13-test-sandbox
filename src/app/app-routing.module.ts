import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';
import { QuizzComponent } from './quizz/quizz.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/quizz' },
  { path: 'quizz', component: QuizzListComponent },
  { path: 'quizz/:id', component: QuizzComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

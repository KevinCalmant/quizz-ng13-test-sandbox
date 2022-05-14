import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzListComponent } from './quizz-list/quizz-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/quizz' },
  { path: 'quizz', component: QuizzListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

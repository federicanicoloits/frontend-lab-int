import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { RisultatiPartiteComponent } from './views/risultati-partite/risultati-partite.component';
import { ApiService } from './services/api/api.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      StandingsResolve: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findStandings();
      },
    },
  },
  { path: 'news', component: NewsComponent },
  { path: 'risultati-partite', component: RisultatiPartiteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

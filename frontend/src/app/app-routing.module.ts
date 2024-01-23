import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { RisultatiPartiteComponent } from './views/risultati-partite/risultati-partite.component';
import { ApiService } from './services/api/api.service';
import { DettaglioPartiteComponent } from './views/dettaglio-partite/dettaglio-partite.component';
import { ClassificaComponent } from './views/classifica/classifica.component';
import { DettaglioNewsComponent } from './views/dettaglio-news/dettaglio-news.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      NewsResolveHome: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findNews();
      },
      StandingsResolve: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findStandings(3);
      },
      PartiteResolveHome: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findLastMatches();
      },
    },
  },
  {
    path: 'dettaglio-partita/:id',
    component: DettaglioPartiteComponent,
    resolve: {
      PartitaResolveDettaglio: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findDettaglioPartita(
          route.paramMap.get('id')!
        );
      },
    },
  },
  {
    path: 'news',
    component: NewsComponent,
    resolve: {
      NewsResolveNews: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findNews();
      },
    },
  },
  {
    path: 'news/:id',
    component: DettaglioNewsComponent,
    resolve: {
      NewsResolveNewsId: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findNewsDetail(route.paramMap.get('id')!);
      },
      AllNewsResolveNewsId: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findNews();
      },
    },
  },
  {
    path: 'risultati-partite',
    component: RisultatiPartiteComponent,
    resolve: {
      PartiteResolveRisultati: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findLastMatches();
      },
    },
  },
  {
    path: 'classifica',
    component: ClassificaComponent,
    resolve: {
      StandingsResolveClassifica: (route: ActivatedRouteSnapshot) => {
        return inject(ApiService).findStandings(20);
      },
    },
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

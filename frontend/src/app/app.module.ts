import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NewsComponent } from './views/news/news.component';
import { RisultatiPartiteComponent } from './views/risultati-partite/risultati-partite.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api/api.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewsContainerComponent } from './components/specific/news-container/news-container.component';
import { NewsMainComponent } from './components/shared/news-main/news-main.component';
import { NewsSideComponent } from './components/shared/news-side/news-side.component';
import {
  LucideAngularModule,
  Clock,
  Info,
  ChevronDown,
  Eye,
} from 'lucide-angular';
import { LastmatchContainerComponent } from './components/specific/lastmatch-container/lastmatch-container.component';
import { SinglematchPreviewComponent } from './components/shared/singlematch-preview/singlematch-preview.component';
import { FootballTablesContainerComponent } from './components/specific/football-tables-container/football-tables-container.component';
import { FootballTablesComponent } from './components/shared/football-tables/football-tables.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PageNewsNewsContainerComponent } from './components/specific/page-news-news-container/page-news-news-container.component';
import { DettaglioPartiteComponent } from './views/dettaglio-partite/dettaglio-partite.component';
import { PartitaDettaglioComponent } from './components/specific/partita-dettaglio/partita-dettaglio.component';
import { ClassificaComponent } from './views/classifica/classifica.component';
import { DettaglioNewsComponent } from './views/dettaglio-news/dettaglio-news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    RisultatiPartiteComponent,
    HeaderComponent,
    NewsContainerComponent,
    NewsMainComponent,
    NewsSideComponent,
    LastmatchContainerComponent,
    SinglematchPreviewComponent,
    FootballTablesContainerComponent,
    FootballTablesComponent,
    FooterComponent,
    PageNewsNewsContainerComponent,
    DettaglioPartiteComponent,
    PartitaDettaglioComponent,
    ClassificaComponent,
    DettaglioNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      Clock,
      Info,
      ChevronDown,
      Eye,
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

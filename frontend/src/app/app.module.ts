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
} from 'lucide-angular';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LucideAngularModule.pick({
      Clock,
      Info
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}

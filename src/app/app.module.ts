import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { PortadaComponent } from './components/portada/portada.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ContadorComponent } from './components/contador/contador.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { CartaComponent } from './components/carta/carta.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortadaComponent,
    HistoriaComponent,
    ContadorComponent,
    GaleriaComponent,
    CartaComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

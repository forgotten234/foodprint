import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';


import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { ProductComponent } from './startseite/product/product.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NscoreComponent } from './nscore/nscore.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { DokumentationComponent } from './dokumentation/dokumentation.component';
import { FilterPropertyPipe } from './pipes/filter-property.pipe';
import { ProduktVergleichenComponent } from './produkt-vergleichen/produkt-vergleichen.component';
import { AlternativenComponent } from './alternativen/alternativen.component';
import { ProduktdetailsComponent } from './produktdetails/produktdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    ProductComponent,
    ImpressumComponent,
    FilterPipe,
    SortPipe,
    NscoreComponent,
    DokumentationComponent,
    FilterPropertyPipe,
    ProduktVergleichenComponent,
    AlternativenComponent,
    ProduktdetailsComponent
  ],
  imports: [
    FooterModule,
    HeaderModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

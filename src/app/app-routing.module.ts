import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { NscoreComponent } from './nscore/nscore.component';
import { DokumentationComponent } from './dokumentation/dokumentation.component';
import { ProduktVergleichenComponent } from './produkt-vergleichen/produkt-vergleichen.component';
import { ProduktdetailsComponent } from './produktdetails/produktdetails.component';
import { AlternativenComponent } from './alternativen/alternativen.component';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
  onSameUrlNavigation: 'reload'
};
const routes: Routes = [
  { path: "", component: StartseiteComponent },
  { path: "impressum", component: ImpressumComponent },
  { path: "nscore", component: NscoreComponent },
  { path: "dokumentation", component: DokumentationComponent },
  { path: "produktdetails/vergleichen", component: ProduktVergleichenComponent },
  { path: "produktdetails/:id", component: ProduktdetailsComponent },
  { path: "alternativen", component: AlternativenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ProduktdetailsComponent];


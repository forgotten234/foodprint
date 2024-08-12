import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [AppRoutingModule],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    providers: [],
 })
 
 export class HeaderModule {
 }
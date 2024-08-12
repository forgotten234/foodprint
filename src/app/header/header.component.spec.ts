
// 1. Testdienstprogramme von Angular importieren:
import { ComponentFixture, TestBed } from '@angular/core/testing';  // ComponentFixture-> Zugriff auf den Dom-Tree; TestBed -> Testumgebung in Karma zu erzeugen 
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';               // Component die getestet werden soll

// 2. Component erstellen
fdescribe('HeaderComponent', () => {                // fdescribe nur die Klassen die auch fdescribe haben (eingrenzing); normalerweise describe
    let component: HeaderComponent;                 // Zugang/ Erstellung zu der Component
    let fixture: ComponentFixture<HeaderComponent>; // Zugriff auf den Dom-Tree
    let de: DebugElement;                           // Zugriff auf .html-Datei


    // 3.Modul erstellen 
    beforeEach(async () => {
        await TestBed.configureTestingModule({      // Bereich einfügen der getestet werden soll, da kein Zugriff auf app.module.ts besteht
            declarations: [HeaderComponent]
        })
            .compileComponents();
    });


    // 4. Füllen der Component mit Inhalt (zieht aktuelle Version, merkt sofort Veränderungen in der Component
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.componentInstance;     // componentInstance ruft alle .ts-Datein auf -> header.component.ts
        de = fixture.debugElement.nativeElement;                // nativeElement ruft alle .html-Datein auf -> header.component.html
        fixture.detectChanges();
    });


    // 5. Test
    // 1. Test -> testet ob die Component erschaffen wird.
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // 2. Test -> dropdownTitle soll 'lebensmittel' sein
    it('should have Lebensmittel as dropDownTitle', () => {
        expect(component.dropDownTitle).toEqual('Lebensmittel');
    });

    // 3. Test -> testet html-Datei -> nav-link soll 'lebensmittel' beinhalten
    it('should render dropDownTitle in a "a" tag', () => {
        const compiled = fixture.debugElement.nativeElement; // Zugang zur html-Datei
        expect(compiled.querySelector('.nav-link').textContent).toContain('Lebensmittel');
    });

});

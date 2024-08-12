import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktVergleichenComponent } from './produkt-vergleichen.component';

describe('ProduktVergleichenComponent', () => {
  let component: ProduktVergleichenComponent;
  let fixture: ComponentFixture<ProduktVergleichenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktVergleichenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktVergleichenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

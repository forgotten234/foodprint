import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativenComponent } from './alternativen.component';

describe('AlternativenComponent', () => {
  let component: AlternativenComponent;
  let fixture: ComponentFixture<AlternativenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

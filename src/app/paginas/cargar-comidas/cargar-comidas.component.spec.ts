import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarComidasComponent } from './cargar-comidas.component';

describe('CargarComidasComponent', () => {
  let component: CargarComidasComponent;
  let fixture: ComponentFixture<CargarComidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarComidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

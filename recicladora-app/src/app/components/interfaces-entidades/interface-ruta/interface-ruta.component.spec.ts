import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceRutaComponent } from './interface-ruta.component';

describe('InterfaceRutaComponent', () => {
  let component: InterfaceRutaComponent;
  let fixture: ComponentFixture<InterfaceRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceRutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

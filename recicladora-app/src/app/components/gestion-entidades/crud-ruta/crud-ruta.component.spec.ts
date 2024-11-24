import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRutaComponent } from './crud-ruta.component';

describe('CrudRutaComponent', () => {
  let component: CrudRutaComponent;
  let fixture: ComponentFixture<CrudRutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudRutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

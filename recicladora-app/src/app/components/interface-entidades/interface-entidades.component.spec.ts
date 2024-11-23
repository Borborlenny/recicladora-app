import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEntidadesComponent } from './interface-entidades.component';

describe('InterfaceEntidadesComponent', () => {
  let component: InterfaceEntidadesComponent;
  let fixture: ComponentFixture<InterfaceEntidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceEntidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEntidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

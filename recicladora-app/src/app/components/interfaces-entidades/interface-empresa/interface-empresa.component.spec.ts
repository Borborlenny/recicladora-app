import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEmpresaComponent } from './interface-empresa.component';

describe('InterfaceEmpresaComponent', () => {
  let component: InterfaceEmpresaComponent;
  let fixture: ComponentFixture<InterfaceEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

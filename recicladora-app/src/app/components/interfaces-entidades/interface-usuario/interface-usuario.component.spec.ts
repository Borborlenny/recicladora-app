import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUsuarioComponent } from './interface-usuario.component';

describe('InterfaceUsuarioComponent', () => {
  let component: InterfaceUsuarioComponent;
  let fixture: ComponentFixture<InterfaceUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUsuarioComponent } from './crud-usuario.component';

describe('CrudUsuarioComponent', () => {
  let component: CrudUsuarioComponent;
  let fixture: ComponentFixture<CrudUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

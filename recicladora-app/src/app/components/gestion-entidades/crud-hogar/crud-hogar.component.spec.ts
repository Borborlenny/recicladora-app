import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHogarComponent } from './crud-hogar.component';

describe('CrudHogarComponent', () => {
  let component: CrudHogarComponent;
  let fixture: ComponentFixture<CrudHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceHogarComponent } from './interface-hogar.component';

describe('InterfaceHogarComponent', () => {
  let component: InterfaceHogarComponent;
  let fixture: ComponentFixture<InterfaceHogarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceHogarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceHogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceMaterialComponent } from './interface-material.component';

describe('InterfaceMaterialComponent', () => {
  let component: InterfaceMaterialComponent;
  let fixture: ComponentFixture<InterfaceMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMaterialComponent } from './crud-material.component';

describe('CrudMaterialComponent', () => {
  let component: CrudMaterialComponent;
  let fixture: ComponentFixture<CrudMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

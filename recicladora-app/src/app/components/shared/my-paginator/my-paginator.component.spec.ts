import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPaginatorComponent } from './my-paginator.component';

describe('MyPaginatorComponent', () => {
  let component: MyPaginatorComponent;
  let fixture: ComponentFixture<MyPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPaginatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSortViewComponent } from './date-sort-view.component';

describe('DateSortViewComponent', () => {
  let component: DateSortViewComponent;
  let fixture: ComponentFixture<DateSortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

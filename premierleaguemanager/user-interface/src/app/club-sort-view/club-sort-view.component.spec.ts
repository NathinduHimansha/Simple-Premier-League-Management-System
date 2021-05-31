import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSortViewComponent } from './club-sort-view.component';

describe('ClubSortViewComponent', () => {
  let component: ClubSortViewComponent;
  let fixture: ComponentFixture<ClubSortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubSortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

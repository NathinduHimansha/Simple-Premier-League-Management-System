import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSortViewComponent } from './match-sort-view.component';

describe('MatchSortViewComponent', () => {
  let component: MatchSortViewComponent;
  let fixture: ComponentFixture<MatchSortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchSortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

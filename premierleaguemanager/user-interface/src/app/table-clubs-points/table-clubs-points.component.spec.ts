import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClubsPointsComponent } from './table-clubs-points.component';

describe('TableClubsPointsComponent', () => {
  let component: TableClubsPointsComponent;
  let fixture: ComponentFixture<TableClubsPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableClubsPointsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClubsPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

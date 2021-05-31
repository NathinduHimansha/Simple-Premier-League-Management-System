import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubSortViewComponent } from './club-sort-view/club-sort-view.component';
import { DateSearchComponent } from './date-search/date-search.component';
import { MainViewComponent } from './main-view/main-view.component';
import { MatchSortViewComponent } from './match-sort-view/match-sort-view.component';

import {DateSortViewComponent} from "./date-sort-view/date-sort-view.component";
import {TableClubsPointsComponent} from "./table-clubs-points/table-clubs-points.component";






const routes: Routes = [
  //{ path: "goalssort", component: GoalsSortComponent },
  //{ path: "winssort", component: WinsSortComponent },
  { path: '', pathMatch: 'full', component: MainViewComponent },
  { path: 'clubsearch', component: ClubSortViewComponent },
  { path: 'matchsearch', component: MatchSortViewComponent },
  { path: 'pointssort', component: TableClubsPointsComponent },
  { path: 'winsssort', component: TableClubsPointsComponent },
  { path: 'goalssort', component: TableClubsPointsComponent },
  { path: 'datesort', component: TableClubsPointsComponent },
  { path: 'dateserach', component: DateSearchComponent },
  //{ path: 'test', component: TestComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClubSortViewComponent, MainViewComponent,DateSearchComponent,DateSortViewComponent,TableClubsPointsComponent,MatchSortViewComponent]


import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ClubSortViewComponent } from '../club-sort-view/club-sort-view.component';
import { SortedClubsPointsService } from '../sorted-clubs-points.service';
import {Club} from "../club";



@Component({
  selector: 'app-table-clubs-points',
  templateUrl: './table-clubs-points.component.html',
  styleUrls: ['./table-clubs-points.component.css']
})
export class TableClubsPointsComponent implements OnInit {
  public sortedClubs: Club[]= [];
  public errorMessage: any;

  constructor(private router: Router, private _SortedClubsPointsService: SortedClubsPointsService) { }

  ngOnInit(): void {
    this._SortedClubsPointsService.getSortedClubsToPoints().subscribe(data => this.sortedClubs = data,
      error => this.errorMessage = error);


  }

  back() {
    this.router.navigate(['clubsearch']);
    //window.history.back();

  }
}



//   getMember(){}
// for (let i = 0; i < 3; i++) {


//   // public getClubs(){
//   //    *ngFor="let club of this.sortedClubs"
//   // }




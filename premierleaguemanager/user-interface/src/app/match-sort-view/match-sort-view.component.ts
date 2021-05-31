import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-match-sort-view',
  templateUrl: './match-sort-view.component.html',
  styleUrls: ['./match-sort-view.component.css']
})
export class MatchSortViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public dateSort() {
    this.router.navigate(['datesort']);

  }

  public dateSearch() {
    this.router.navigate(['dateserach']);
  }

  back() {
    this.router.navigate(['../']);

  }

}

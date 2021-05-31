import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-club-sort-view',
  templateUrl: './club-sort-view.component.html',
  styleUrls: ['./club-sort-view.component.css']
})
export class ClubSortViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }



  public pointsSort(){
    this.router.navigate(['pointssort']);

  }

  public goalsSort(){
    this.router.navigate(['goalssort']);
  }

  public winsSort(){
    this.router.navigate(['winsssort']);
  }

  back() {
    this.router.navigate(['../']);

  }

}

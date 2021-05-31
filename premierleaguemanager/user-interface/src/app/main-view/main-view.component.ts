import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public clubSearch() {
    //this.title = 'CLUB SEARCH';
    this.router.navigate(['clubsearch'])
  }
  public matchSearch() {
    //this.title = 'CLUB SEARCH';
    this.router.navigate(['matchsearch'])
  }

  public addMatch(){

  }

}

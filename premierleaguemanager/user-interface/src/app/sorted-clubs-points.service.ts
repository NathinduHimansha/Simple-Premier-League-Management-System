import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError as observableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';
import {Club} from "./club";


@Injectable({
  providedIn: 'root'
})
export class SortedClubsPointsService {
  private _urlToPoints: string = "/assets/data/sorted-clubs-wins.json";

  constructor(private http: HttpClient) { }

  getSortedClubsToPoints(): Observable<Club[]> {
    return this.http.get<Club[]>(this._urlToPoints).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || "Server Error")
  }
}

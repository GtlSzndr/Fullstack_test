import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { F1Team } from './f1-team';


@Injectable({
  providedIn: 'root'
})
export class F1Service {

  private baseURL = "http://localhost:8080/api/F1_teams"
  public isUpdateNeeded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public getF1list(): Observable<F1Team[]> {
    return this.httpClient.get<F1Team[]>(`${this.baseURL}`);
  }

  public createTeam(team: F1Team): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, team);
  }

  public getTeamById(id: number): Observable<F1Team> {
    return this.httpClient.get<F1Team>(`${this.baseURL}/${id}`);
  }

  public deleteTeam(id: number): Observable<Object>  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { F1Service } from '../f1.service';
import { F1Team } from '../f1-team';
import { MatDialog } from '@angular/material/dialog';
import { CreateTeamComponent } from '../create-team/create-team.component';
import { UserService } from '../user.service';
import { first } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { UpdateTeamComponent } from '../update-team/update-team.component';

@UntilDestroy()
@Component({
  selector: 'app-f1-list',
  templateUrl: './f1-list.component.html',
  styleUrls: ['./f1-list.component.css']
})
export class F1ListComponent implements OnInit {

  public f1teams: F1Team[];
  public displayedColumns: string[] = ['teamName', 'yearOfEstablishment', 'numOfWorldChampionships', 'entryFreePaid'];

  constructor(
    private f1Service: F1Service,
    private dialog: MatDialog,
    public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getF1Teams();

    this.f1Service.isUpdateNeeded$.pipe(untilDestroyed(this)).subscribe(_ => {
      this.getF1Teams();
    });

    if (this.userService.getAuthStatus()) {
      this.displayedColumns.push("actions");
    }
  }

  private getF1Teams(){
    this.f1Service.getF1list().pipe(first()).subscribe(data => {
      this.f1teams = data;
      this.f1teams.sort((a, b) => b.numOfWorldChampionships - a.numOfWorldChampionships);
    });
  }

  public createTeam() {
    this.dialog.open(
      CreateTeamComponent,
      {
        disableClose: true,
        data:
        {
          message: '',
        },
      },
    );
  }

  public updateTeam(id: number) {
    this.dialog.open(
      UpdateTeamComponent,
      {
        disableClose: true,
        data:
        {
          id: id,
        },
      },
    );
  }

  public deleteTeam(id: number) {
    this.f1Service.deleteTeam(id).pipe(untilDestroyed(this)).subscribe(data => {
      this.getF1Teams();
    });
  }

}

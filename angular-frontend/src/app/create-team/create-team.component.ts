import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { F1Team } from '../f1-team';
import { F1Service } from '../f1.service';

@UntilDestroy()
@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit{

  public team: F1Team = new F1Team;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: String,
    private dialogRef: MatDialogRef<CreateTeamComponent>,
    private dialog: MatDialog,
    private f1Service: F1Service,
  ) { }

  ngOnInit(): void {
  }

  public createTeam() {
    this.f1Service.createTeam(this.team).pipe(untilDestroyed(this)).subscribe(data => {
      this.closeDialog();
      });
  }

  public closeDialog() {
    this.f1Service.isUpdateNeeded$.next(true);
    this.dialogRef.close();
  }

}

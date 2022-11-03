import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { F1Team } from '../f1-team';
import { F1Service } from '../f1.service';

@UntilDestroy()
@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  public team: F1Team = new F1Team;
  public id: number;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private dialogRef: MatDialogRef<UpdateTeamComponent>,
    private dialog: MatDialog,
    private f1Service: F1Service
  ) { }

  ngOnInit(): void {
    console.log(this.data.id);
    this.f1Service.getTeamById(this.data.id).subscribe(data => {
      this.team = data;
    });
  }

  public updateTeam() {
    this.f1Service.createTeam(this.team).pipe(untilDestroyed(this)).subscribe(data => {
      console.log(data);
      this.closeDialog();
      });
  }

  public closeDialog() {
    this.f1Service.isUpdateNeeded$.next(true);
    this.dialogRef.close();
  }

}

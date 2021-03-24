import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonal } from '../shared/interfaces/personal';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [ TeamService ],
})
export class TeamComponent implements OnInit {
  
  public personal$: Observable<IPersonal[]> | undefined;
  
  constructor(private readonly teamService: TeamService) { }

  ngOnInit() {
    this.personal$ = this.teamService.getKitaTeam$();
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChild } from '../shared/interfaces/child';
import { IUser } from '../shared/interfaces/user';
import { AuthenticationService } from '../shared/security/authentication.service';
import { ChildrenService } from '../shared/services/children.service';

@Component({
  selector: 'child-activities-overview',
  templateUrl: './child-activities-overview.component.html',
  styleUrls: ['./child-activities-overview.component.scss']
})
export class ChildActivitiesOverviewComponent implements OnInit {

  public children$: Observable<IChild[]>;

  constructor(
    private readonly authService: AuthenticationService,
    private readonly childrenService: ChildrenService) { }

  ngOnInit(): void {
    let user: IUser = this.authService.userValue;
    this.children$ = this.childrenService.getChildrenByParent$(user.id);
  }
}

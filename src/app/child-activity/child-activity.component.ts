import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IChild } from '../shared/interfaces/child';
import { IGroupActivity } from '../shared/interfaces/group-activity';
import { ChildrenService } from '../shared/services/children.service';

@Component({
  selector: 'child-activity',
  templateUrl: './child-activity.component.html',
  styleUrls: ['./child-activity.component.scss']
})
export class ChildActivityComponent implements OnInit {
  @Input() public child: IChild;

  public groupActivities$: Observable<IGroupActivity>;

  constructor(private readonly childSerivce: ChildrenService) { }

  ngOnInit(): void {
    this.groupActivities$ = this.childSerivce.getChildActivity$(this.child.groupId);
  }
  
}

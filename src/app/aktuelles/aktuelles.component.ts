import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IActuell } from '../shared/interfaces/actuell';
import { AktuellesService } from './aktuelles.service';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.scss']
})
export class AktuellesComponent implements OnInit {

  public actuelles$: Observable<IActuell[]> | undefined;

  constructor(private readonly newsService: AktuellesService) { }
  
  ngOnInit() {
    this.actuelles$ = this.newsService.getNews$();
  }
}

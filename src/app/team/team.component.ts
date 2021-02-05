import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPersonal } from '../shared/interfaces/personal';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  
  public personal$: Observable<IPersonal[]> | undefined;

  constructor() { }

  ngOnInit() {
    this.personal$ = of([
      { id: 'j8P9sz', firstName: 'Pepperoni', lastName: 'test1', position: 'Assistentin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
      { id: 'tMot06', firstName: 'Supreme', lastName: 'test2', position: 'Leiterin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
      { id: 'x9sD3g', firstName: 'Sizzler', lastName: 'test3', position: 'Assistentin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
      { id: 'x9sD3g', firstName: 'SizTertererzler', lastName: 'test4test4 ', position: 'Assistentin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
      { id: 'x9sD3g', firstName: 'Sizzltrutzuer', lastName: 'test5', position: 'Assistentin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
      { id: 'x9sD3g', firstName: 'Sizrzler', lastName: 'test6', position: 'Assistentin', phone: '0157 520 25 393', email: 'muster.email@gmail.com' },
    ]);
  }

}

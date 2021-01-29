import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IActuell } from '../shared/interfaces/actuell';

@Component({
  selector: 'app-aktuelles',
  templateUrl: './aktuelles.component.html',
  styleUrls: ['./aktuelles.component.scss']
})
export class AktuellesComponent implements OnInit {

  public actuelles$: Observable<IActuell[]> | undefined;
  
  ngOnInit(): void {
    this.actuelles$ = of([
      { id: "j8P9sz", title: "Pepperoni", text: "test1", date: new Date('11.12.1897'), image: "https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img (133).jpg" },
      { id: "tMot06", title: "Supreme", text: "test2", date: new Date(), image: 'c://temp1.jpg' },
      { id: "x9sD3g", title: "Sizzler", text: "test3", date: new Date(), image: 'c://temp2.jpg' },
      { id: "x9sD3g", title: "SizTertererzler", text: "test4test4 test4test4tes t4test4test4test4tes t4test4t est4test4test4tes t4test4test4te st4test4", date: new Date(), image: 'c://temp4.jpg' },
      { id: "x9sD3g", title: "Sizzltrutzuer", text: "test5", date: new Date(), image: 'c://temp6.jpg' },
      { id: "x9sD3g", title: "Sizrzler", text: "test6", date: new Date(), image: 'c://temp7.jpg' },
    ]);
  }

}

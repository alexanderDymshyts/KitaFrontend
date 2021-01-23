import { Component, OnInit } from '@angular/core';


import '../../styles.scss';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {   

  public onArrowClick(){
    var element = document.getElementById('mainBody');
    element?.scrollIntoView({behavior: "smooth", block: "start", inline: "center"});
  }  
}

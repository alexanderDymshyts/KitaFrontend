import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IMenu } from '../shared/interfaces/menu';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ernahrung',
  templateUrl: './ernahrung.component.html',
  styleUrls: ['./ernahrung.component.scss']
})
export class ErnahrungComponent implements OnInit {

  public monday: IMenu | undefined;
  public tuesday: IMenu | undefined;
  public wednesday: IMenu | undefined;
  public thursday: IMenu | undefined;
  public friday: IMenu | undefined;

  constructor() { }

  ngOnInit() {
    of([
      { id: '1', date: new Date('2021-03-01'), lunch: 'Pizza Salami mit gurken', snak:'Some snack 1', breakfast: 'Egg with Coffee 1', dayOfTheWeek: WeekDay.Monday },
      { id: '2', date: new Date('2021-03-02'), lunch: 'Pizza Salami ohne gurken', snak:'Some snack 2', breakfast: 'Egg with Coffee 2', dayOfTheWeek: WeekDay.Tuesday },
      { id: '3', date: new Date('2021-03-03'), lunch: 'Pasta bolognese', snak:'Some snack 3', breakfast: 'Egg with Coffee 3', dayOfTheWeek: WeekDay.Wednesday },
      { id: '4', date: new Date('2021-03-04'), lunch: 'Brot mit Nutella', snak:'Some snack 4', breakfast: 'Egg with Coffee 4', dayOfTheWeek: WeekDay.Thursday },
      { id: '5', date: new Date('2021-03-05'), lunch: 'Salat mit mozarella', snak:'Some snack 5', breakfast: 'Egg with Coffee 5', dayOfTheWeek: WeekDay.Friday },
    ]).pipe(
      take(1)
    ).subscribe(menus => {
      this.monday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Monday);
      this.tuesday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Tuesday);
      this.wednesday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Wednesday);
      this.thursday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Thursday);
      this.friday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Friday);
    });
  }

  

}

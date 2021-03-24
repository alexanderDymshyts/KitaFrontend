import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IMenu } from '../shared/interfaces/menu';
import { take, tap } from 'rxjs/operators';
import { ErnahrungService } from './ernahrung.service';

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

  constructor(private readonly ernahrungService: ErnahrungService) { }

  ngOnInit() {
    this.ernahrungService.getWeeklyMenu$().pipe(
      tap((menus: IMenu[]) => {
        console.log(menus);
        this.monday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Monday);
        this.tuesday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Tuesday);
        this.wednesday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Wednesday);
        this.thursday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Thursday);
        this.friday = menus.find(menu => menu.dayOfTheWeek === WeekDay.Friday);     
    })).subscribe();   
  }
}

import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    this.ernahrungService.getWeeklyMenu$()
    .pipe(
      tap((menus: IMenu[]) => { 
        this.monday = menus.find(menu => menu.dayOfTheWeek === 2);
        this.tuesday = menus.find(menu => menu.dayOfTheWeek === 3);
        this.wednesday = menus.find(menu => menu.dayOfTheWeek === 4);
        this.thursday = menus.find(menu => menu.dayOfTheWeek === 5);
        this.friday = menus.find(menu => menu.dayOfTheWeek === 6);
    }))
    .subscribe();   
  }
}

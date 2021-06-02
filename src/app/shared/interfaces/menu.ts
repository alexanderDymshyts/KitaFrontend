import { WeekDay } from "@angular/common";

export interface IMenu {
    id: string;
    menuDate: Date;
    dayOfTheWeek: WeekDay;
    lunch: string;
    snack: string;
    breakfast: string;
}

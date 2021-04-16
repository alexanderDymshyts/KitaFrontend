import { WeekDay } from "@angular/common";

export interface IMenu {
    id: string;
    date: Date;
    dayOfTheWeek: WeekDay;
    lunch: string;
    snack: string;
    breakfast: string;
}

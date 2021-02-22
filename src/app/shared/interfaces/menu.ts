import { WeekDay } from "@angular/common";

export interface IMenu {
    id: string;
    date: Date;
    dayOfTheWeek: WeekDay;
    lunch: string;
    snak: string;
    breakfast: string;
}

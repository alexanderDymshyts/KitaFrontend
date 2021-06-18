import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMenu } from "../shared/interfaces/menu";
import { BaseRequestService } from "../shared/services/base-requests.service";

@Injectable()
export class ErnahrungService {
    constructor(private readonly baseRequestService: BaseRequestService) {}

    public getWeeklyMenu$(): Observable<IMenu[]> {
        return this.baseRequestService.sendGetRequest$('api/weekly-menu').pipe(
            map(res => res as IMenu[])
        );
    }
}
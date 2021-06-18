import { Injectable } from "@angular/core";
import { BaseRequestService } from "../shared/services/base-requests.service";
import { Observable, of } from 'rxjs';
import { IPersonal } from "../shared/interfaces/personal";
import { map } from "rxjs/operators";

@Injectable()
export class TeamService {
    constructor(private readonly baseRequestService: BaseRequestService){}

    public getKitaTeam$(): Observable<IPersonal[]> {
         return this.baseRequestService.sendGetRequest$('api/personal').pipe(
           map(res => res as IPersonal[])
         );       
    }
}
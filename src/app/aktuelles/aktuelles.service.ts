import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IActuell } from "../shared/interfaces/actuell";
import { BaseRequestService } from "../shared/services/base-requests.service";

@Injectable()
export class AktuellesService {
    constructor(private readonly baseRequestService: BaseRequestService) {}

    public getNews$(): Observable<IActuell[]> {
        return this.baseRequestService.sendGetRequest$('news').pipe(
            map(res => res as IActuell[])
        );
    }
}
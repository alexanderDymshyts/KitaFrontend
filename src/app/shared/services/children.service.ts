import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IChild } from "../interfaces/child";
import { IGroupActivity } from "../interfaces/group-activity";
import { BaseRequestService } from "./base-requests.service";

@Injectable()
export class ChildrenService{
    constructor(private readonly baseRequestService: BaseRequestService){};

    public getChildrenByParent$(id: string): Observable<IChild[]> {
        if(typeof id != 'undefined' && id)
            return this.baseRequestService.sendGetRequest$(`api/parents-children/parent/${id}`).pipe(
                map(res => res as IChild[])
            );

        return EMPTY;
    }

    public getChildActivity$(gruopId: string): Observable<IGroupActivity>{
        if(typeof gruopId != 'undefined' && gruopId)
        return this.baseRequestService.sendGetRequest$(`api/group-activities/group/${gruopId}`).pipe(
            map(res => res as IGroupActivity)
        );

    return EMPTY;
    }
}
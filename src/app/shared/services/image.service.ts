import { Injectable } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { IImage } from "../interfaces/image";
import { BaseRequestService } from "./base-requests.service";

@Injectable()
export class ImageService {
    constructor(private readonly baseRequestService: BaseRequestService){};

    public getImageById$(id: string): Observable<IImage>{
        if(typeof id != 'undefined' && id)
            return this.baseRequestService.sendGetRequest$(`api/image/${id}`);
                   
        return EMPTY;
    }
}
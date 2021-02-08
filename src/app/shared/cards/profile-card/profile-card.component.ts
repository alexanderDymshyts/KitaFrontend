import { Component, Input, OnInit } from "@angular/core";
import { IPersonal } from "../../interfaces/personal";
@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss'],
})

export class ProfileCardComponent{
    @Input() public member: IPersonal | undefined;

    constructor(){}         

    public createImg(base64String: string) {      
        return `data:image/png;base64,${base64String}`;
    }  
}
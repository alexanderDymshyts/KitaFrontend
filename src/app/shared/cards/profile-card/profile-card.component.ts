import { Component, Input } from "@angular/core";
import { IPersonal } from "../../interfaces/personal";

@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss'],
})

export class ProfileCardComponent {
    @Input() public member: IPersonal | undefined;

    constructor(){}

    // public makeUrlFromBlob(blob: Blob) {
    //     return URL.createObjectURL(blob);
    // }
}
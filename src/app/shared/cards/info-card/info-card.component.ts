import { Component, Input } from "@angular/core";
import { IActuell } from "../../interfaces/actuell";

@Component({
    selector: 'info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {       
    @Input() public card: IActuell | undefined;

    public createImg(base64String: string) {      
        return `data:image/png;base64,${base64String}`;
    } 
}
import { Component, Input } from "@angular/core";
import { IActuell } from "../interfaces/actuell";

@Component({
    selector: 'app-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {       
    @Input() public card: IActuell | undefined;
}
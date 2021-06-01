import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IActuell } from "../../interfaces/actuell";
import { ImageService } from "../../services/image.service";

@Component({
    selector: 'info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {     
    @Input() public card!: IActuell;

    public imageBase64$: Observable<string> | undefined;

    constructor(private readonly imageService: ImageService){};
    
    ngOnInit(): void {
        this.imageBase64$ = this.imageService.getImageById(this.card?.imageId).pipe(
            map(image => `data:image/png;base64,${image.image}`),
        );
    };    
}
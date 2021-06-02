import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IPersonal } from "../../interfaces/personal";
import { ImageService } from "../../services/image.service";
@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['./profile-card.component.scss'],
})

export class ProfileCardComponent implements OnInit{
    @Input() public worker!: IPersonal;

    public imageBase64$: Observable<string> | undefined;
    
    constructor(private readonly imageService: ImageService){}     

    ngOnInit(): void {
        console.log('loading profile...');
         this.imageBase64$ = this.imageService.getImageById(this.worker?.imageId).pipe(
            map(image => `data:image/png;base64,${image.image}`),
        );
    }   
}
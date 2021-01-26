import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit{

    @Input() public id: string | undefined;
    @Input() public title: string | undefined;
    @Input() public text: string | undefined;
    @Input() public date: Date | undefined;
    @Input() public image: string | undefined;

    ngOnInit(): void {
       
        console.info('card data: ');
        console.info('id: ' + this.id);
        console.info('title: ' + this.title);
        console.info('text: ' + this.text);
      }
}
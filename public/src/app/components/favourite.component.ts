/**
 * Created by abhishek on 07/09/2017.
 */

import {Component, EventEmitter, Input, Output} from "@angular/core";
@Component({
    selector: 'favourite',
    template: `
        <span>
            <i class="glyphicon" [class.glyphicon-star-empty]="!isFavorite" [class.glyphicon-star]="isFavorite"
               (click)="onClick()"></i>
        </span>

    `
})
export class FavouriteComponent{
    @Input() isFavorite =false;

    @Output() change=new EventEmitter()

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue:this.isFavorite});
    }
}
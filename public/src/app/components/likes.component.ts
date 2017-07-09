/**
 * Created by abhishek on 07/09/2017.
 */


import {Component, Input} from "@angular/core";
@Component({
    selector: "likes",
    template: `
        <span>
            {{countOfLikes}}
            <i class="glyphicon glyphicon-heart"
               [style.color]="!isClicked ? '#ccc':'deeppink'" 
               (click)="likeClicked()"
            ></i>
        </span>

    `
})
export class LikesComponent {
    @Input() isLiked: boolean;
    @Input() countOfLikes: number;
    isClicked = false;

    likeClicked(){
        if(this.isClicked){
            this.countOfLikes--;
            this.isLiked = false;
        }
        else
            this.countOfLikes++;
        this.isClicked = !this.isClicked;
    }

}
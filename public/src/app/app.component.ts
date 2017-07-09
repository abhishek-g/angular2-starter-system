import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
      <favourite [isFavorite]="post.isFavorite" (change)="logChange($event)"></favourite>
      <likes [countOfLikes]="post.count" [isLiked]="post.isFavorite"></likes>
      <voter [votes]="post.count"></voter>
  `
})
export class AppComponent {
    post={
        title:"Testing",
        isFavorite:false,
        count:8
    };

    logChange($event:any){
        console.log($event);
    }


}

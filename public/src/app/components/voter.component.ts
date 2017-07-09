/**
 * Created by abhishek on 07/09/2017.
 */

import {Component, Input} from "@angular/core";
@Component({
    selector: 'voter',
    template: `
        <div class="voter-container">
            <i class="glyphicon glyphicon-menu-up" (click)="voteUP()"></i>
            <span>{{votes}}</span>
            <i class="glyphicon glyphicon-menu-down" (click)="voteDown()"></i>
        </div>

    `,
    styles: [`
        .voter-container {
            width: 20px;
        }

        .glyphicon-menu-up.active {
            color: yellow;
        }

        .glyphicon-menu-down.active {
            color: yellow;
        }
    `]
})
export class VoterComponent {

    @Input() votes: number;

    votedUp: boolean = false;
    votedDown: boolean = false;

    voteUP() {
        if (!this.votedUp || this.votedDown) {
            this.votes++;
            this.votedUp = true;
        }

    }

    voteDown() {
        if (!this.votedDown || this.votedUp) {
            this.votes--;
            this.votedDown = true;
        }
    }
}

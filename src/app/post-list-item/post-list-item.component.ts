import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() loveIts: number;
    @Input() createdAt: Date;

    constructor() {
        this.loveIts = 0;
        this.createdAt = new Date();
    }

    ngOnInit() {
    }

    onLoveIt() {
        return this.loveIts ++;
    }

    onDontLoveIt() {
        return this.loveIts --;
    }

}

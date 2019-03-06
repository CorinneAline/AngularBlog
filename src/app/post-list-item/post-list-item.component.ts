import { Component, OnInit, Input } from '@angular/core';
import {Post} from './../post';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements Post {

    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() loveIts: number;
    @Input() createdAt: Date;

    constructor() {
    }

    onLoveIt() {
        return this.loveIts ++;
    }

    onDontLoveIt() {
        return this.loveIts --;
    }

}

import {Input} from '@angular/core';

export class Post {
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() loveIts: number;
    @Input() createdAt: Date;

    constructor(title, content) {
        this.postTitle = title;
        this.postContent = content;
        this.loveIts = 0;
        this.createdAt = new Date();
    }

    onLoveIt() {
    }

    onDontLoveIt() {
    }
}

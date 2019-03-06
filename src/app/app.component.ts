import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'my-blog';
    posts = [
        new Post(
            'My Post Number One',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ),
        new Post(
            'My Post Number Two',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ),
        new Post(
            'My Post Number Three',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ),
        new Post(
            'My Post Number Four',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        ),
        new Post(
            'My Post Number Five',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        )
    ];
}

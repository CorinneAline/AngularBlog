import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-blog';
  posts = [
      {
          title: 'My post number One',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          loveIt: 0,
          createdAt: ''
      },
      {
          title: 'My post number Two',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          loveIt: 0,
          createdAt: ''
      },
      {
          title: 'My post number Three',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          loveIt: 0,
          createdAt: ''
      },
      {
          title: 'My post number Four',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          loveIt: 0,
          createdAt: ''
      },
      {
          title: 'My post number Five',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          loveIt: 0,
          createdAt: ''
      },
  ];
}

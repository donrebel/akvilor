import { Injectable } from '@angular/core';

import {UserPageContent} from '../models/UserPageContent';
import {Post} from '../models/UserPageContent';

@Injectable()
export class UserPageContentService {
  private userPageContent: UserPageContent;

  constructor() {}

  getContent(){
      this.userPageContent = new UserPageContent();
      this.userPageContent.posts[0] = new Post('VITAE SED CONDIMENTUM','assets/images/p1.jpg','2016-03-01');
      this.userPageContent.posts[1] = new Post('RUTRUM NEQUE ACCUMSAN','assets/images/p2.jpg','2016-02-01');
      this.userPageContent.posts[2] = new Post('ODIO CONGUE MATTIS','assets/images/p3.jpg','2016-01-01');
      this.userPageContent.posts[3] = new Post('ENIM NISL VEROEROS','assets/images/test2.jpg','2016-05-12');
      this.userPageContent.posts[4] = new Post('ENIM NISL VEROEROS 2','assets/images/p4.jpg','2016-05-12');
      return this.userPageContent;
  }
}

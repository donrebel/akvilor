import { Injectable } from '@angular/core';

import {UserPageContent} from '../models/UserPageContent';
import {Post} from '../models/UserPageContent';


let content = [
  new Post(1,'VITAE SED CONDIMENTUM','assets/images/p1.jpg','2016-03-01'),
  new Post(2,'RUTRUM NEQUE ACCUMSAN','assets/images/p2.jpg','2016-02-01'),
  new Post(3,'ODIO CONGUE MATTIS','assets/images/p3.jpg','2016-01-01'),
  new Post(4,'ENIM NISL VEROEROS','assets/images/test2.jpg','2016-05-12'),
  new Post(5,'ENIM NISL VEROEROS 2','assets/images/p4.jpg','2016-05-12')
]
let contentPromise = Promise.resolve(content);

@Injectable()
export class UserPageContentService {
  private userPageContent: UserPageContent;

  constructor() {}

  getContent(){
    this.userPageContent = new UserPageContent();
    this.userPageContent.posts = content;
    return Promise.resolve(this.userPageContent);
  }

  getContentItem(id: number|string) {
    return contentPromise
      .then(content => content.find(sontentItem => sontentItem.id === +id));
  }

}

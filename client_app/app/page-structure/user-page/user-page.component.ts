import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


//import { MdCard } from '@angular2-material/card';
//import { MdButtonModule } from '@angular2-material/button';
//import { UserCardComponent } from './user-card/user-card.component';
//import { PostComponent } from './post/post.component';
//import { MiniPostComponent } from './mini-post/mini-post.component';
import { UserPageContent} from './models/UserPageContent';

import { UserPageContentService } from './services/user-page-content.service';

@Component({
  moduleId: module.id,
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public pageContent:UserPageContent;
  public userName:string;
  public errorMessage:string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentService: UserPageContentService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.userName = params['id'];
        return this.contentService.getContent()
      })
      .subscribe((content: UserPageContent) => {
        this.pageContent = content;
      })
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    };
  }

  goBack(){
     window.history.back();
   }
}

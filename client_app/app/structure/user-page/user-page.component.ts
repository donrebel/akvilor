import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

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

  private accIsLoading = false;

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

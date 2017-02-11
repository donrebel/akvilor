export class UserPageContent {
  public posts:Post[];
  constructor(){
    this.posts = [];
  }
};

export class Post{
  constructor(
    public id: number,
    public title: string,
    public titleImageSrc: string,
    public dateCreated: string
  ){}
}

export class UserInfo{
  constructor(
    public userName:string,
    public personName:string,
    public email:string,
    public avatarPicture:string,
    public canvasPicture:string,
    public synopsis:string,
    public skilltaglist:[string]
  ) {}
}

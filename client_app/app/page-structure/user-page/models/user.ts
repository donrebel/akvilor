export class User{
  constructor(
  /*  public id:string,
    public name:string,
    public isAuthorized:boolean = false,
    public tags:string[],
*/
    public userName:string,
    public hashedPassword:string,
    public salt:string,
    public eMail:string,
    public personName:string,
    public created:Date
  ){}
}

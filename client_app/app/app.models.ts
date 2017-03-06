interface UserProfileIdentities {
  user_id: string,
  provider: string,
  connection: string,
  isSocial: boolean
}

export interface UserProfile {
    user_id: string,
    email: string,
    picture: string,
    name: string,
    nickname: string,
    last_password_reset: string,
    app_metadata: Object,
    signed_up: boolean,
    email_verified: boolean,
    clientID: string,
    updated_at: string,
    identities: UserProfileIdentities[],
    created_at: string,
    global_client_id: string
}

export interface IUserAccount {
    id: string,
    user_account_id: string,
    user_profile_id: string,
    accountName: string,
    personName: string,
    accountEmail: string,
    avatarPicture: string,
    canvasPicture:string,
    skilltaglist: string[],
    ratePerMinute: number,
    likes: number
}

export class UserAccount implements IUserAccount {
  public user_account_id: string;
  public user_profile_id: string;
  public accountName: string;
  public personName: string;
  public accountEmail: string;
  public avatarPicture: string;
  public canvasPicture:string;
  public skilltaglist: string[];
  public ratePerMinute: number;
  public likes: number

  constructor (
    public id: string,
  ) {}
}

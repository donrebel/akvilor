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
    user_profile: UserProfile,
    accountName: string,
    personName: string,
    firstName: string,
    lastName: string,
    title: string,
    localTime: Date,
    accountEmail: string,
    avatarPicture: string,
    canvasPicture:string,
    skills: string[],
    ratePerMinute: number,
    likes: number,
    overview: string
}

export class UserAccount implements IUserAccount {
  public user_account_id: string;
  public user_profile_id: string;
  public user_profile: UserProfile;
  public accountName: string;
  public personName: string;
  public firstName: string;
  public lastName: string;
  public title: string;
  public localTime: Date;
  public accountEmail: string;
  public avatarPicture: string;
  public canvasPicture:string;
  public skills: string[];
  public ratePerMinute: number;
  public likes: number;
  public overview: string;

  constructor (
    public id: string,
  ) {}
}

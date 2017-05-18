import { uuid } from '../shared/utils';

interface AuthOUserProfileIdentities {
  user_id: string,
  provider: string,
  connection: string,
  isSocial: boolean
}

export interface AuthOUserProfile {
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
    identities: AuthOUserProfileIdentities[],
    created_at: string,
    global_client_id: string
}

export interface IUserProfile {
    id: string,
    autho_profile: AuthOUserProfile,
    firstName: string,
    lastName: string,
    title: string,
    localTime: Date,
    canvasPicture:string,
    skills: string[],
    ratePerMinute: number,
    likes: number,
    overview: string
}

export class UserProfile implements IUserProfile {
  public autho_profile: AuthOUserProfile;
  public firstName: string;
  public lastName: string;
  public title: string;
  public localTime: Date;
  public canvasPicture:string;
  public skills: string[];
  public ratePerMinute: number;
  public likes: number;
  public overview: string;

  constructor (
    public id: string,
  ) {}
}

export class User {
  id: string;
  name: string;
  avatarSrc: string

  // constructor (id?: string, name?: string, avatarSrc?: string) {
  //   if (id == '') {
  //     this.id = uuid()
  //   } else {
  //     this.id = id
  //   };
  //   this.name = name || 'guest';
  //   this.avatarSrc = avatarSrc || '';
  // }

  constructor (obj?: any) {
    this.id = obj && obj.id || uuid()
    this.name = obj && obj.autho_profile && obj.autho_profile.nickname || 'guest'
    this.avatarSrc = obj && obj.autho_profile && obj.autho_profile.picture || ''
  }

}

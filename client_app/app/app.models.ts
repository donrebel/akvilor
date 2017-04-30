// interface AuthOUserProfileIdentities {
//   user_id: string,
//   provider: string,
//   connection: string,
//   isSocial: boolean
// }
//
// export interface AuthOUserProfile {
//     user_id: string,
//     email: string,
//     picture: string,
//     name: string,
//     nickname: string,
//     last_password_reset: string,
//     app_metadata: Object,
//     signed_up: boolean,
//     email_verified: boolean,
//     clientID: string,
//     updated_at: string,
//     identities: AuthOUserProfileIdentities[],
//     created_at: string,
//     global_client_id: string
// }
//
// export interface IUserProfile {
//     id: string,
//     autho_profile: AuthOUserProfile,
//     firstName: string,
//     lastName: string,
//     title: string,
//     localTime: Date,
//     canvasPicture:string,
//     skills: string[],
//     ratePerMinute: number,
//     likes: number,
//     overview: string
// }
//
// export class UserProfile implements IUserProfile {
//   public autho_profile: AuthOUserProfile;
//   public firstName: string;
//   public lastName: string;
//   public title: string;
//   public localTime: Date;
//   public canvasPicture:string;
//   public skills: string[];
//   public ratePerMinute: number;
//   public likes: number;
//   public overview: string;
//
//   constructor (
//     public id: string,
//   ) {}
// }

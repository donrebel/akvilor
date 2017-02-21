export class UserProfile {
  constructor (
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
    identites: Object[],
    created_at: string,
    global_client_id: string
  ) { }
}

export class UserAccount {
  constructor(
    user_account_id: string,
    user_profile_id: string,
    accountName: string,
    personName: string,
    accountEmail: string,
    avatarPicture: string,
    canvasPicture:string,
    synopsis:string,
    skilltaglist: string[]
  ) { }

}

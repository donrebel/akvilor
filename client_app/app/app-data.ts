import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {
  createDb() {
    let searchItems = [
      { id: '111', name: 'item1' },
      { id: '222', name: 'item2' },
      { id: '333', name: 'item3' },
      { id: '444', name: 'item4' },
      { id: '555', name: 'item5' },
      { id: '666', name: 'item6' }
    ];

    let userProfile = [
      {
        email:"max.y.kovalenko@gmail.com",
        picture:"https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        name:"max.y.kovalenko@gmail.com",
        nickname:"max.y.kovalenko",
        last_password_reset:"2016-12-01T07:42:51.918Z",
        app_metadata:{"signed_up":true},
        signed_up:true,
        email_verified:true,
        clientID:"dXFukGIX83bwXj2R8yFPsKR3dhecEWZi",
        updated_at:"2017-02-20T23:27:34.842Z",
        user_id:"auth0|57521c76bf3ea47941a13343",
        identities:[{
        	user_id:"57521c76bf3ea47941a13343",
        	provider:"auth0",
        	connection:"Username-Password-Authentication",
        	isSocial:false}],
        created_at:"2016-06-04T00:10:30.336Z",
        global_client_id:"nwKPC1ZmIj9UPkTAvbU6rvFs8ial48FU"
      },
      {
        email:"max.cimmerian@gmail.com",
        picture:"https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        name:"max.cimmerian@gmail.com",
        nickname:"max.cimmerian",
        last_password_reset:"2016-12-01T07:42:51.918Z",
        app_metadata:{"signed_up":true},
        signed_up:true,
        email_verified:true,
        clientID:"dXFukGIX83bwXj2R8yFPsKR3dhecEWZi",
        updated_at:"2017-02-20T23:27:34.842Z",
        user_id:"auth0|575219c5eddebf241d6126fb",
        identities:[
          {
            user_id: "575219c5eddebf241d6126fb",
            provider: "auth0",
            connection: "Username-Password-Authentication",
            isSocial: false
          }
        ],
        created_at:"2016-06-03T23:59:01.395Z",
        global_client_id:"nwKPC1ZmIj9UPkTAvbU6rvFs8ial48FU"
      }
    ];

//    user_id: "auth0|57521c76bf3ea47941a13343",

    let userAccount = [
      {
        id: "57521c76bf3ea47941a13343",
        user_account_id: "111",
        user_profile_id: "111",
        accountName: "cimmerian",
        personName: "Maksym Kovalenko",
        accountEmail: "max.y.kovalenko@gmail.com",
        avatarPicture: "https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        canvasPicture: "assets/images/usercard.jpg",
        synopsis: "LOREM IPSUM DOLOR SIT AMET, ETIAM LOREM ADIPISCING ELIT. CRAS TURPIS ANTE, NULLAM SIT AMET TURPIS NON, SOLLICITUDIN POSUERE URNA. MAURIS ID TELLUS ARCU. NUNC VEHICULA ID NULLA DIGNISSIM DAPIBUS. NULLAM ULTRICES, NEQUE ET FAUCIBUS VIVERRA, EX NULLA CURSUS",
        skilltaglist: ["AngularJS", "HTML", "CSS", "ReactJS"],
        ratePerMinute: 7.37,
        likes: 570
      },
      {
        id: "575219c5eddebf241d6126fb",
        user_account_id: "222",
        user_profile_id: "222",
        accountName: "max.cimmerian",
        personName: "Maksym Kovalenko 2",
        accountEmail: "max.cimmerian@gmail.com",
        avatarPicture: "https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
        canvasPicture: "assets/images/usercard.jpg",
        synopsis: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        skilltaglist: ["DWBI", "Database", "SQL", "Machine Learning"],
        ratePerMinute: 5.55,
        likes: 310
      }

    ]
    return {searchItems, userProfile, userAccount};
  }
}

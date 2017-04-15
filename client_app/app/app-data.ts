import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {
  createDb() {

    let search_item_user_profiles = [
      {
        user_profile_id: '57521c76bf3ea47941a13343',
        avatar_img_src: 'https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png',
        canvas_img_src: 'assets/images/p1.jpg',
        first_name: 'Maksym',
        last_name: 'Kovalenko',
        title: 'Software Engineer',
        overview: "For some people, the accelerated learning process is continuous. But for most, it levels off when they get their first job. If there are no more exams to take, if there's no demand to get out paper and pencil, why read any more books? Of course, you will learn some things through experience. Just getting out there—sometimes doing it wrong and sometimes doing it right—you will learn",
        skills: ["AngularJS", "HTML", "CSS", "ReactJS"],
        rate_per_minute: '7.37',
        likes: '530'
      },
      {
        user_profile_id: '575219c5eddebf241d6126fb',
        avatar_img_src: 'https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png',
        canvas_img_src: 'assets/images/p1.jpg',
        first_name: 'Maksym',
        last_name: 'Kovalenko',
        title: 'DWBI Developer',
        overview: "For some people, the accelerated learning process is continuous. But for most, it levels off when they get their first job. If there are no more exams to take, if there's no demand to get out paper and pencil, why read any more books? Of course, you will learn some things through experience. Just getting out there—sometimes doing it wrong and sometimes doing it right—you will learn",
        skills: ["DWBI", "Database", "SQL", "Machine Learning"],
        rate_per_minute: '5.57',
        likes: '210'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: '',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/f1.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/f2.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/f3.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/f4.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/p3.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      },
      {
        user_profile_id: '11',
        avatar_img_src: 'assets/images/avatar1.jpg',
        canvas_img_src: 'assets/images/p4.jpg',
        first_name: 'asd',
        last_name: 'asd',
        title: 'asd',
        overview: 'as',
        skills: 'asd',
        rate_per_minute: 'asdd',
        likes: 'ads'
      }
    ]



    let userProfile = [
      {
        id: "57521c76bf3ea47941a13343",
        autho_profile: {
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
        firstName: "Maksym",
        lastName: "Kovalenko",
        title: "Software Engineer",
        localTime: new Date("February 4, 2016 10:13:00"),
        canvasPicture: "assets/images/usercard.jpg",
        overview: "For some people, the accelerated learning process is continuous. But for most, it levels off when they get their first job. If there are no more exams to take, if there's no demand to get out paper and pencil, why read any more books? Of course, you will learn some things through experience. Just getting out there—sometimes doing it wrong and sometimes doing it right—you will learn",
        skills: ["AngularJS", "HTML", "CSS", "ReactJS"],
        ratePerMinute: 7.37,
        likes: 570
      },
      {
        id: "575219c5eddebf241d6126fb",
        autho_profile: {
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
        },
        firstName: "Maksym",
        lastName: "Kovalenko 2",
        title: "DWBI Developer",
        localTime: new Date("January 4, 2016 10:13:00"),
        canvasPicture: "assets/images/usercard.jpg",
        overview: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
        skills: ["DWBI", "Database", "SQL", "Machine Learning"],
        ratePerMinute: 5.55,
        likes: 310
      }
    ]

    let messageLog = [
      {
        session_id: "1",
        participants: [
          {
            user_id: "57521c76bf3ea47941a13343",
            nickname: "max.y.kovalenko",
            picture: "https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
          },
          {
            user_id: "575219c5eddebf241d6126fb",
            nickname: "max.cimmerian",
            picture: "https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
          }
        ],
        messages: [
          {
            message_id: "1",
            user_id: "57521c76bf3ea47941a13343",
            timestamp: "2017-04-07T23:22:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          },
          {
            message_id: "2",
            user_id: "575219c5eddebf241d6126fb",
            timestamp: "2017-04-07T23:23:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          }
        ]
      },
      {
        session_id: "2",
        participants: [
          {
            user_id: "57521c76bf3ea47941a13343",
            nickname: "max.y.kovalenko",
            picture: "https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
          },
          {
            user_id: "111",
            nickname: "nickname1",
            picture: "'assets/images/avatar1.jpg"
          }
        ],
        messages: [
          {
            message_id: "1",
            user_id: "57521c76bf3ea47941a13343",
            timestamp: "2017-04-07T23:22:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          },
          {
            message_id: "2",
            user_id: "111",
            timestamp: "2017-04-07T23:23:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          }
        ]
      },
      {
        session_id: "3",
        participants: [
          {
            user_id: "57521c76bf3ea47941a13343",
            nickname: "max.y.kovalenko",
            picture: "https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png"
          },
          {
            user_id: "222",
            nickname: "nickname2",
            picture: "'assets/images/ph.jpg"
          }
        ],
        messages: [
          {
            message_id: "1",
            user_id: "57521c76bf3ea47941a13343",
            timestamp: "2017-04-07T23:22:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          },
          {
            message_id: "2",
            user_id: "222",
            timestamp: "2017-04-07T23:23:36.155Z",
            message_body: "asdasdasdasd",
            status: "read"
          }
        ]
      }
    ]

    let chat_items = [
      {
        session_id: "1",
        message_id: "1",
        user_id: "57521c76bf3ea47941a13343",
        timestamp: "2017-04-07T23:22:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      },
      {
        session_id: "1",
        message_id: "2",
        user_id: "575219c5eddebf241d6126fb",
        timestamp: "2017-04-07T23:23:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      },
      {
        session_id: "2",
        message_id: "1",
        user_id: "57521c76bf3ea47941a13343",
        timestamp: "2017-04-07T23:22:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      },
      {
        session_id: "2",
        message_id: "2",
        user_id: "111",
        timestamp: "2017-04-07T23:23:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      },
      {
        session_id: "3",
        message_id: "1",
        user_id: "57521c76bf3ea47941a13343",
        timestamp: "2017-04-07T23:22:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      },
      {
        session_id: "3",
        message_id: "2",
        user_id: "222",
        timestamp: "2017-04-07T23:23:36.155Z",
        message_body: "asdasdasdasd",
        status: "read"
      }
    ]


    return {userProfile, search_item_user_profiles, chat_items};
  }
}

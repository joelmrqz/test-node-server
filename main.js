const bodyParser = require("body-parser");
const express = require("express");
const Pusher = require("pusher");
const morgan = require("morgan");
const faker = require("faker");
const uuidv1 = require("uuid/v1");
const moment = require("moment");


const {
  accessControl,
} = require("./middleware");


const server = express();
server.set("port", process.env.PORT || 5000);


server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan("tiny"));
server.all("*", accessControl);


let counter = 0;
const ids = [];


/*
 * ====================
 * Test JSONP End Point
 * ====================
 */
server.use("/test-jsonp-endpoint", (req, res) => {
  const data = [
    {
      id: "123123123",
      endTime: "2019-06-17T13:00:00.000Z",
      startTime: "2019-06-17T10:00:00.000Z",
      cancelled: false,
      facilityClass: {
        id: 103,
        image: "",
        name: "Boxing - Adults",
      },
      facilityInstructor: {
        firstName: "Joel",
        id: 101,
        lastName: null,
        name: "Joel Marquez",
        profileImage: "",
      },
    }
  ];

  response.status(200).jsonp(data).end();
});



/*
 * ====================
 * TEST GOOGLE PLACES
 * ====================
 */
server.use("/test-places-endpoint", (req, res) => {
  const data = {
    predictions: [
      {
        description: "Manhattan, New York, NY, USA",
        id: "476d37be9512ae1c37df40b54d55c5a911a413f1",
        matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        place_id: "ChIJYeZuBI9YwokRjMDs_IEyCwo",
        reference: "ChIJYeZuBI9YwokRjMDs_IEyCwo",
        structured_formatting: {
          main_text: "Manhattan",
          main_text_matched_substrings: [
            {
              length: 9,
              offset: 0,
            },
          ],
          secondary_text: "New York, NY, USA",
        },
        terms: [
          {
            offset: 0,
            value: "Manhattan",
          },
          {
            offset: 11,
            value: "New York",
          },
          {
            offset: 21,
            value: "NY",
          },
          {
            offset: 25,
            value: "USA",
          },
        ],
        types: [
          "sublocality_level_1",
          "sublocality",
          "political",
          "geocode",
        ],
      },
      {
        description: "Manhattan Beach, CA, USA",
        id: "1213ffa8982342d62c811126297d496d7c75a218",
        matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        place_id: "ChIJL2Ow4sWzwoARIEUV9NRRAwc",
        reference: "ChIJL2Ow4sWzwoARIEUV9NRRAwc",
        structured_formatting: {
          main_text: "Manhattan Beach",
          main_text_matched_substrings: [
            {
              length: 9,
              offset: 0,
            },
          ],
          secondary_text: "CA, USA",
        },
        terms: [
          {
            offset: 0,
            value: "Manhattan Beach",
          },
          {
            offset: 17,
            value: "CA",
          },
          {
            offset: 21,
            value: "USA",
          },
        ],
        types: [
          "locality",
          "political",
          "geocode",
        ],
      },
      {
        description: "Manhattan, KS, USA",
        id: "1d7c6ef6fe8f9418b813b69c8cf246058548b998",
        matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        place_id: "ChIJLWPDRO-3vYcR78cSc0hdGKk",
        reference: "ChIJLWPDRO-3vYcR78cSc0hdGKk",
        structured_formatting: {
          main_text: "Manhattan",
          main_text_matched_substrings: [
            {
              length: 9,
              offset: 0,
            },
          ],
          secondary_text: "KS, USA",
        },
        terms: [
          {
            offset: 0,
            value: "Manhattan",
          },
          {
            offset: 11,
            value: "KS",
          },
          {
            offset: 15,
            value: "USA",
          },
        ],
        types: [
          "locality",
          "political",
          "geocode",
        ],
      },
      {
        description: "Manhattan Bridge, Manhattan Bridge, New York, NY, USA",
        id: "7ca295a8e3aae152a99b3bc9631b9e67abcccd19",
        matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        place_id: "ChIJS1F1Oy5awokRz58BetNK5Xs",
        reference: "ChIJS1F1Oy5awokRz58BetNK5Xs",
        structured_formatting: {
          main_text: "Manhattan Bridge",
          main_text_matched_substrings: [
            {
              length: 9,
              offset: 0,
            },
          ],
          secondary_text: "Manhattan Bridge, New York, NY, USA",
        },
        terms: [
          {
            offset: 0,
            value: "Manhattan Bridge",
          },
          {
            offset: 18,
            value: "Manhattan Bridge",
          },
          {
            offset: 36,
            value: "New York",
          },
          {
            offset: 46,
            value: "NY",
          },
          {
            offset: 50,
            value: "USA",
          },
        ],
        types: [
          "point_of_interest",
          "establishment",
        ],
      },
      {
        description: "Manhattan Beach Pier, Manhattan Beach, CA, USA",
        id: "a6f217fe74b2bdfc5370562496c340eecb57d3d5",
        matched_substrings: [
          {
            length: 9,
            offset: 0,
          },
        ],
        place_id: "ChIJ7U-BHeuzwoARAvYAqFtEc2A",
        reference: "ChIJ7U-BHeuzwoARAvYAqFtEc2A",
        structured_formatting: {
          main_text: "Manhattan Beach Pier",
          main_text_matched_substrings: [
            {
              length: 9,
              offset: 0,
            },
          ],
          secondary_text: "Manhattan Beach, CA, USA",
        },
        terms: [
          {
            offset: 0,
            value: "Manhattan Beach Pier",
          },
          {
            offset: 22,
            value: "Manhattan Beach",
          },
          {
            offset: 39,
            value: "CA",
          },
          {
            offset: 43,
            value: "USA",
          },
        ],
        types: [
          "premise",
          "point_of_interest",
          "establishment",
        ],
      },
    ],
    status: "OK",
  };

  response.status(200).jsonp(data).end();
});



/*
 * ====================
 * TEST PUSHER.JS
 * ====================
 */
server.post("/partners/pusher", (req, res) => {
  console.log("PUSHER_AUTH:", Date.now());

  const socketId = req.body.socketId;
  const channel = req.body.channel_name;

  const pusher = new Pusher({
    appId: "839088",
    key: "4f993048f17eef9bf530",
    secret: "0901f2057f9db781c6bc",
    cluster: "ap1",
    useTLS: true,
  });

  const auth = pusher.authenticate(socketId, channel);
  res.status(200).json(auth).end();
});



/*
 * ====================
 * PUSHER TRIGGER ADD
 * ====================
 */
server.get("/partners/trigger/add", (req, res) => {
  console.log("PUSHER_TRIGGER:", Date.now());
  const items = ["guest", "popin", "member", "classpass"];

  const classesDates = [0, 1, 2, 3, 4, 5];
  const sessionsDates = [0, 1, 2, 3, 4, 5];
  const checkinDates = [0, 1, 2, 3, 4, 5]

  const channels_client = new Pusher({
    appId: "839088",
    key: "4f993048f17eef9bf530",
    secret: "0901f2057f9db781c6bc",
    cluster: "ap1",
    useTLS: true,
  });

  const id = uuidv1();
  ids.push(id);

  const payload = {
    id,
    checkInTime: Date.now(),
    facilityId: 78,
    firstVisit: true,
    memberId: "473183202",
    memberType: "guest",
    profilePictureUrl: "https://s3.amazonaws.com/images-popin/profile/000007fd9b884717ae92dcc83aa2806d",
    status: "checkedIn",
    workoutId: "3001442144",
  }

  // const payload = {
  //   id,
  //   image: "https://source.unsplash.com/random/70x70",
  //   name: faker.name.findName(),
  //   email: faker.internet.email(),
  //   phone: faker.phone.phoneNumberFormat(),
  //   status: "checkin",
  //   memberType: items[Math.floor(Math.random() * items.length)],
  //   checkInTime: moment().add(checkinDates[Math.floor(Math.random() * checkinDates.length)], 'hours').toDate(),
  //   address: {
  //     line1: faker.address.streetAddress(),
  //     line2: faker.address.city(),
  //     line3: `${faker.address.state()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`,
  //   },
  //   dates: {
  //     joined: Date.now(),
  //     contractEnd: Date.now(),
  //     firstVisit: Date.now(),
  //   },
  // };

  // if (Math.round(Math.random())) {
  //   payload.referrer = {
  //     name: faker.name.findName(),
  //     image: "https://source.unsplash.com/random/30x30",
  //   };
  // }

  // payload.referred = [];

  // if (Math.round(Math.random())) {
  //   payload.referred.push({
  //     name: faker.name.findName(),
  //     image: "https://source.unsplash.com/random/30x30",
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.referred.push({
  //     name: faker.name.findName(),
  //     image: "https://source.unsplash.com/random/30x30",
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.referred.push({
  //     name: faker.name.findName(),
  //     image: "https://source.unsplash.com/random/30x30",
  //   });
  // }

  // payload.classes = [];

  // if (Math.round(Math.random())) {
  //   payload.classes.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(classesDates[Math.floor(Math.random() * classesDates.length)], 'days').toDate(),
  //     type: "class",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.classes.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(classesDates[Math.floor(Math.random() * classesDates.length)], 'days').toDate(),
  //     type: "class",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.classes.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(classesDates[Math.floor(Math.random() * classesDates.length)], 'days').toDate(),
  //     type: "class",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.classes.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(classesDates[Math.floor(Math.random() * classesDates.length)], 'days').toDate(),
  //     type: "class",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // payload.sessions = [];

  // console.log('@@@@@@@@@@@@', sessionsDates[Math.floor(Math.random() * sessionsDates.length)]);
  // console.log('@@@@@@@@@@@@', sessionsDates[Math.floor(Math.random() * sessionsDates.length)]);
  // console.log('@@@@@@@@@@@@', sessionsDates[Math.floor(Math.random() * sessionsDates.length)]);

  // if (Math.round(Math.random())) {
  //   payload.sessions.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(sessionsDates[Math.floor(Math.random() * sessionsDates.length)], 'days').toDate(),
  //     type: "session",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.sessions.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(sessionsDates[Math.floor(Math.random() * sessionsDates.length)], 'days').toDate(),
  //     type: "session",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.sessions.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(sessionsDates[Math.floor(Math.random() * sessionsDates.length)], 'days').toDate(),
  //     type: "session",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // if (Math.round(Math.random())) {
  //   payload.sessions.push({
  //     id: uuidv1(),
  //     name: faker.random.word(),
  //     image: "https://source.unsplash.com/random/30x30",
  //     start: moment().add(sessionsDates[Math.floor(Math.random() * sessionsDates.length)], 'days').toDate(),
  //     type: "session",
  //     instructor: {
  //       name: faker.name.findName(),
  //       image: "https://source.unsplash.com/random/30x30",
  //     },
  //   });
  // }

  // payload.inbox = [];

  // if (Math.round(Math.random())) {
  //   payload.inbox.push(faker.company.catchPhrase());
  // }

  // if (Math.round(Math.random())) {
  //   payload.inbox.push(faker.company.catchPhrase());
  // }

  // if (Math.round(Math.random())) {
  //   payload.inbox.push(faker.company.catchPhrase());
  // }

  channels_client.trigger("private-web-533712854", "checkin", payload);
  res.status(200).json({}).end();
});



/*
 * ====================
 * PUSHER TRIGGER DEL
 * ====================
 */
server.get("/partners/trigger/del", (req, res) => {
  console.log("PUSHER_TRIGGER:", Date.now());


  const channels_client = new Pusher({
    appId: "839088",
    key: "4f993048f17eef9bf530",
    secret: "0901f2057f9db781c6bc",
    cluster: "ap1",
    useTLS: true
  });


  const [id] = ids.splice((ids.length - 1), 1);


  channels_client.trigger("private-web-533712854", "checkout", {
    id,
    checkOutTime: Date.now(),
  });


  res.status(200).json({}).end();
});



/*
 * ====================
 * COMPANY INFO
 * ====================
 */
server.get('/partners/facilities', async (req, res) => {
  const payload = [{
    id: 65,
    name: 'Limelight Fitness',
    images: [
      'https://s3.amazonaws.com/images-popin/limelight/weights3.jpg',
      'https://s3.amazonaws.com/images-popin/limelight/weights2.jpg',
      'https://s3.amazonaws.com/images-popin/limelight/weights.jpg',
      'https://s3.amazonaws.com/images-popin/limelight/treadmills.jpg',
      'https://s3.amazonaws.com/images-popin/limelight/studio.jpg',
      'https://s3.amazonaws.com/images-popin/limelight/locker.jpg'
    ],
    description: null,
    price: 22,
    phone: '6469645741',
    hours: {
      '1': {
        closingTime: '23:00',
        openingTime: '05:00'
      },
      '2': {
        closingTime: '23:00',
        openingTime: '05:00'
      },
      '3': {
        closingTime: '23:00',
        openingTime: '05:00'
      },
      '4': {
        closingTime: '23:00',
        openingTime: '05:00'
      },
      '5': {
        closingTime: '21:00',
        openingTime: '05:00'
      },
      '6': {
        closingTime: '19:00',
        openingTime: '05:00'
      },
      '7': {
        closingTime: '17:00',
        openingTime: '05:00'
      }
    },
    companyId: 1029936548,
    status: 'active',
    addressId: 70,
    slug: 'limelight-fitness-656-avenue-of-the-americas',
    facilityId: '533712854',
    address: {
      id: 70,
      street: '656 Avenue of the Americas',
      state: 'NY',
      city: 'New York',
      zip: '10011',
      neighborhood: 'Chelsea'
    },
    roleId: 3,
  }];


  res.status(200).json(payload).end();
});



server.post("/partners/qr", (req, res) => {
  res.status(200).json({
    qr: Math.random().toString(),
  }).end();
});


server.get("/partners/me", (req, res) => {
  const payload = {
    "logo": "https://images-popin.s3.amazonaws.com/logos/flatiron-fitness.png",
    "guest": {
      "limit": 4,
      "popin": true
    },
    "styles": {
      "primaryColor": "blue",
      "secondaryColor": "red"
    },
    "companyId": "1029936548",
    "facilities": [
      {
        "name": "Flatiron Fitness",
        "facilityId": "533712854",
        "hours": {
          "1": {
            "closingTime": "23:00",
            "openingTime": "06:00"
          },
          "2": {
            "closingTime": "23:00",
            "openingTime": "06:00"
          },
          "3": {
            "closingTime": "23:00",
            "openingTime": "06:00"
          },
          "4": {
            "closingTime": "23:00",
            "openingTime": "06:00"
          },
          "5": {
            "closingTime": "23:00",
            "openingTime": "06:00"
          },
          "6": {
            "closingTime": "20:00",
            "openingTime": "08:00"
          },
          "7": {
            "closingTime": "20:00",
            "openingTime": "08:00"
          }
        },
        "price": 30,
        "phone": "2129244600"
      }
    ]
  }

  res.status(200).json(payload).end();
});


/*
{
  "logo": "https://images-popin.s3.amazonaws.com/logos/flatiron-fitness.png",
  "companyId": "1029936548",
  "facilities": [
    {
      "name": "Flatiron Fitness",
      "facilityId": "533712854",
      "hours": {
        "1": {
          "closingTime": "23:00",
          "openingTime": "06:00"
        },
        "2": {
          "closingTime": "23:00",
          "openingTime": "06:00"
        },
        "3": {
          "closingTime": "23:00",
          "openingTime": "06:00"
        },
        "4": {
          "closingTime": "23:00",
          "openingTime": "06:00"
        },
        "5": {
          "closingTime": "23:00",
          "openingTime": "06:00"
        },
        "6": {
          "closingTime": "20:00",
          "openingTime": "08:00"
        },
        "7": {
          "closingTime": "20:00",
          "openingTime": "08:00"
        }
      },
      "price": 30,
      "phone": "2129244600"
    }
  ]
}*/



const start = `# SERVER @ PORT ${server.get("port")} #`;
const listener = () => console.log(start);
server.listen(server.get("port"), listener);

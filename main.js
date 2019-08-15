const bodyParser = require("body-parser");
const express = require("express");
const Pusher = require("pusher");
const morgan = require("morgan");

const {
  accessControl,
} = require("./middleware");

const server = express();
server.set("port", process.env.PORT || 5000);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan("tiny"));
server.all("*", accessControl);


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

server.get("/partners/trigger", (req, res) => {
	console.log("PUSHER_TRIGGER:", Date.now());

	const channels_client = new Pusher({
	  appId: "839088",
	  key: "4f993048f17eef9bf530",
	  secret: "0901f2057f9db781c6bc",
	  cluster: "ap1",
	  useTLS: true
	});

	channels_client.trigger("private-channel", "private-event", {
	  "message": `${Date.now()} - DATA FROM SERVER`,
	});

	res.status(200).json({}).end();
});


const start = `# SERVER @ PORT ${server.get("port")} #`;
const listener = () => console.log(start);
server.listen(server.get("port"), listener);

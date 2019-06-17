const bodyParser = require("body-parser");
const express = require("express");

const {
  accessControl,
} = require("./middleware");

const server = express();
server.set("port", process.env.PORT || 5000);
server.set("baseUri", "/api/v1");
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.all("*", accessControl);


/*
 * ====================
 * Test JSONP End Point
 * ====================
 */
server.use("/test-endpoint", (request, response) => {
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


const start = `# SERVER @ PORT ${server.get("port")} #`;
const listener = () => console.log(start);
server.listen(server.get("port"), listener);

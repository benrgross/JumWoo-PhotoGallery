const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jumwoo", {
  useNewUrlParser: true,
});

const imageSeed = [
  {
    type: "exterior",
    description: "LA Terrace",
    image: "/images/JUMWOO_Work1.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image: "/images/JUMWOO_Work2.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image: "/images/JUMWOO_Work3.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Store Exterior",
    image: "/images/JUMWOO_Work4.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Store Exterior",
    image: "/images/JUMWOO_Work5.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image: "/images/JUMWOO_Work6.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image: "/images/JUMWOO_Work7.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Store Interior",
    image: "/images/JUMWOO_Work8.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Modern Gate",
    image: "/images/JUMWOO_Work9.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Public Structure",
    image: "/images/JUMWOO_Work10.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building Facade - Ground Level",
    image: "/images/JUMWOO_Work11.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Bridge From Bellow",
    image: "/images/JUMWOO_Work12.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Modern Courtyard",
    image: "/images/JUMWOO_Work13.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Building Facade - Ground Level",
    image: "/images/JUMWOO_Work14.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Modern Skywalk",
    image: "/images/JUMWOO_Work15.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Facades Perspective",
    image: "/images/JUMWOO_Work16.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Under A Pier",
    image: "/images/JUMWOO_Work17.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "landscape",
    description: "Facades Perspective",
    image: "/images/JUMWOO_Work18.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room",

    image: "/images/JUMWOO_Work19.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Dining Room to Ourdoor Patio",
    image: "/images/JUMWOO_Work20.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Master Bedroom",
    image: "/images/JUMWOO_Work21.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image: "/images/JUMWOO_Work22.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image: "/images/JUMWOO_Work23.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Home",
    image: "/images/JUMWOO_Work24.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kitchen",
    image: "/images/JUMWOO_Work25.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image: "/images/JUMWOO_Work26.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image: "/images/JUMWOO_Work27.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Condo",
    image: "/images/JUMWOO_Work28.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Bathroom",
    image: "/images/JUMWOO_Work29.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Kitchen",
    image: "/images/JUMWOO_Work30.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Highrise Lobby",
    image: "/images/JUMWOO_Work31.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Bedroom",
    image: "/images/JUMWOO_Work32.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Bedroom",
    image: "/images/JUMWOO_Work33.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Detail",
    image: "/images/JUMWOO_Work34.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "San Diego Condo Detail",
    image: "/images/JUMWOO_Work35.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "San Diego Complex Facade",
    image: "/images/JUMWOO_Work36.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Waterfront Cafe",
    image: "/images/JUMWOO_Work37.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Bedroom",
    image: "/images/JUMWOO_Work38.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kithcen Into Bedroom",
    image: "/images/JUMWOO_Work39.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room",
    image: "/images/JUMWOO_Work40.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Variety Building From Above",
    image: "/images/JUMWOO_Work41.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building Facade From Below",
    image: "/images/JUMWOO_Work42.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image: "/images/JUMWOO_Work43.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image: "/images/JUMWOO_Work45.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image: "/images/JUMWOO_Work46.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image: "/images/JUMWOO_Work47.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building and Parking Lot",
    image: "/images/JUMWOO_Work48.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building For Sale",
    image: "/images/JUMWOO_Work49.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Workspace Available",
    image: "/images/JUMWOO_Work50.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Facade",
    image: "/images/JUMWOO_Work51.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building From Above",
    image: "/images/JUMWOO_Work52.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Birds",
    image: "/images/JUMWOO_Work53.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Landscape",
    image: "/images/JUMWOO_Work54.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building From Above",
    image: "/images/JUMWOO_Work56.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building Bird's Eye",
    image: "/images/JUMWOO_Work57.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Landscape",
    image: "/images/JUMWOO_Work58.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall Above",
    image: "/images/JUMWOO_Work59.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall Rooftop",
    image: "/images/JUMWOO_Work60.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Above Profile",
    image: "/images/JUMWOO_Work61.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Birds Eye",
    image: "/images/JUMWOO_Work62.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kitchen",
    image: "/images/JUMWOO_Work64.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Bathroom",
    image: "/images/JUMWOO_Work65.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Apartment Complex Terrace View",
    image: "/images/JUMWOO_Work66.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Empty Apartment Room",
    image: "/images/JUMWOO_Work67.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Condo Swimming Pool",
    image: "/images/JUMWOO_Work69.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Private Swimming Pool",
    image: "/images/JUMWOO_Work70.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Sunny Kitchen",
    image: "/images/JUMWOO_Work71.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room into Kitchen",
    image: "/images/JUMWOO_Work72.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Children's Bedroom",
    image: "/images/JUMWOO_Work73.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bedroom",
    image: "/images/JUMWOO_Work74.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bathroom",
    image: "/images/JUMWOO_Work75.jpg",

    date: new Date(Date.now()),
  },
];

db.Image.deleteMany({})
  .then(() => db.Image.collection.insertMany(imageSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

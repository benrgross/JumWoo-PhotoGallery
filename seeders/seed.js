const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jumwoo", {
  useNewUrlParser: true,
});

const imageSeed = [
  // {
  //   type: "exterior",
  //   description: "LA Terrace",
  //   image: "/images/JUMWOO_Work1.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Store Interior",
  //   image: "/images/JUMWOO_Work2.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Store Interior",
  //   image: "/images/JUMWOO_Work3.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Store Exterior",
  //   image: "/images/JUMWOO_Work4.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Store Exterior",
  //   image: "/images/JUMWOO_Work5.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Store Interior",
  //   image: "/images/JUMWOO_Work6.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Store Interior",
  //   image: "/images/JUMWOO_Work7.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Store Interior",
  //   image: "/images/JUMWOO_Work8.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Modern Gate",
  //   image: "/images/JUMWOO_Work9.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Public Structure",
  //   image: "/images/JUMWOO_Work10.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Building Facade - Ground Level",
  //   image: "/images/JUMWOO_WORK11.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Bridge From Bellow",
  //   image: "/images/JUMWOO_Work12.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Modern Courtyard",
  //   image: "/images/JUMWOO_Work13.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Building Facade - Ground Level",
  //   image: "/images/JUMWOO_Work14.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Modern Skywalk",
  //   image: "/images/JUMWOO_WORK15.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Facades Perspective",
  //   image: "/images/JUMWOO_WORK16.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Under A Pier",
  //   image: "/images/JUMWOO_WORK17.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "landscape",
  //   description: "Facades Perspective",
  //   image: "/images/JUMWOO_WORK18.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Living Room",

  //   image: "/images/JUMWOO_WORK19.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Dining Room to Ourdoor Patio",
  //   image: "/images/JUMWOO_WORK20.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Master Bedroom",
  //   image: "/images/JUMWOO_WORK21.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "San Diego Home",
  //   image: "/images/JUMWOO_WORK22.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "San Diego Home",
  //   image: "/images/JUMWOO_WORK23.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "San Diego Home",
  //   image: "/images/JUMWOO_WORK24.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Kitchen",
  //   image: "/images/JUMWOO_WORK25.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Condo",
  //   image: "/images/JUMWOO_WORK26.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Condo",
  //   image: "/images/JUMWOO_WORK27.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Condo",
  //   image: "/images/JUMWOO_WORK28.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Bathroom",
  //   image: "/images/JUMWOO_WORK29.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Kitchen",
  //   image: "/images/JUMWOO_WORK30.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Highrise Lobby",
  //   image: "/images/JUMWOO_WORK31.jpg",
  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Condo Bedroom",
  //   image: "/images/JUMWOO_WORK32.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Condo Bedroom",
  //   image: "/images/JUMWOO_WORK33.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Condo Detail",
  //   image: "/images/JUMWOO_WORK34.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "San Diego Condo Detail",
  //   image: "/images/JUMWOO_WORK35.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "San Diego Complex Facade",
  //   image: "/images/JUMWOO_WORK36.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Waterfront Cafe",
  //   image: "/images/JUMWOO_WORK37.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Bedroom",
  //   image: "/images/JUMWOO_WORK38.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Kithcen Into Bedroom",
  //   image: "/images/JUMWOO_WORK39.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "interior",
  //   description: "Living Room",
  //   image: "/images/JUMWOO_WORK40.jpg",

  //   date: new Date(Date.now()),
  // },
  // {
  //   type: "exterior",
  //   description: "Variety Building From Above",
  //   image: "/images/JUMWOO_WORK41.jpg",

  //   date: new Date(Date.now()),
  // },
  {
    type: "exterior",
    description: "Building Facade From Below",
    image: "/images/JUMWOO_WORK42.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image: "/images/JUMWOO_WORK43.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image: "/images/JUMWOO_WORK45.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall From Above",
    image: "/images/JUMWOO_WORK46.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "California Strip Mall",
    image: "/images/JUMWOO_WORK47.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building and Parking Lot",
    image: "/images/JUMWOO_WORK48.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Building For Sale",
    image: "/images/JUMWOO_WORK49.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Workspace Available",
    image: "/images/JUMWOO_WORK50.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Facade",
    image: "/images/JUMWOO_WORK51.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building From Above",
    image: "/images/JUMWOO_WORK52.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Birds",
    image: "/images/JUMWOO_WORK53.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Landscape",
    image: "/images/JUMWOO_WORK54.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building From Above",
    image: "/images/JUMWOO_WORK56.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Commercial Building Bird's Eye",
    image: "/images/JUMWOO_WORK57.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Brick Building Landscape",
    image: "/images/JUMWOO_WORK58.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall Above",
    image: "/images/JUMWOO_WORK59.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Strip Mall Rooftop",
    image: "/images/JUMWOO_WORK60.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Above Profile",
    image: "/images/JUMWOO_WORK61.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Downtown LA Building Birds Eye",
    image: "/images/JUMWOO_WORK62.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Kitchen",
    image: "/images/JUMWOO_WORK64.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Bathroom",
    image: "/images/JUMWOO_WORK65.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Apartment Complex Terrace View",
    image: "/images/JUMWOO_WORK66.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Empty Apartment Room",
    image: "/images/JUMWOO_WORK67.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Condo Swimming Pool",
    image: "/images/JUMWOO_WORK69.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "exterior",
    description: "Private Swimming Pool",
    image: "/images/JUMWOO_WORK70.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Sunny Kitchen",
    image: "/images/JUMWOO_WORK71.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Living Room into Kitchen",
    image: "/images/JUMWOO_WORK72.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: "Children's Bedroom",
    image: "/images/JUMWOO_WORK73.jpg",
    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bedroom",
    image: "/images/JUMWOO_WORK74.jpg",

    date: new Date(Date.now()),
  },
  {
    type: "interior",
    description: " Bathroom",
    image: "/images/JUMWOO_WORK75.jpg",

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

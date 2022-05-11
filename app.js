const devInfo = [
  {
    id: 01,
    name: "Nihal",
    age: 17,
    skill: "MERN Stack Dev",
  },
  {
    id: 02,
    name: "Tahir",
    age: 23,
    skill: "Laravel Dev",
  },
  {
    id: 03,
    name: "Ashraful haque",
    age: 32,
    skill: "Django Dev",
  },
  {
    id: 04,
    name: "Jillur Rahman",
    age: 29,
    skill: "WordPress Dev",
  },
  {
    id: 05,
    name: "Hossain",
    age: 33,
    skill: "Java Dev",
  },
];


let data = `[{id: 01,
      name: "Nihal",
      age: 17,
      skill: "MERN Stack Dev",},{id: 02,
      name: "Tahir",
      age: 23,
      skill: "Laravel Dev",},{id: 03,
      name: "Ashraful haque",
      age: 32,
      skill: "Django Dev",},{id: 04,
      name: "Jillur Rahman",
      age: 29,
      skill: "WordPress Dev",},{id: 05,
      name: "Hossain",
      age: 33,
      skill: "Java Dev",}];`;

console.log(JSON.parse(data));

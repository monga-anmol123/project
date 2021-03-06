// local reviews data
const reviews = [
  {
    id: 0,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  } ,
  {
    id: 1,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  }
];


let count=0;

const prev=document.getElementById('previous');
const next= document.getElementById('next');

const rand = document.getElementById("random");

let job= document.getElementById("job");
let info= document.getElementById("info");
let photo= document.getElementById("photo");
let author= document.getElementById("author");


prev.onclick = function(){
    count--;
    if(count<0)
    count=3;

    job.textContent = reviews[count].job;
    info.textContent = reviews[count].text;
    author.textContent= reviews[count].name;
    photo.src = reviews[count].img;
};
next.onclick = function(){
    count++;
    if(count>= reviews.length)
    count=0;

    job.textContent = reviews[count].job;
    info.textContent = reviews[count].text;
    author.textContent= reviews[count].name;
    photo.src = reviews[count].img;
};

rand.onclick = function(){
     count = Math.floor(Math.random() * reviews.length);

    job.textContent = reviews[count].job;
    info.textContent = reviews[count].text;
    author.textContent= reviews[count].name;
    photo.src = reviews[count].img;
};

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (NODE_ENV === 'development') {
    console.log(`${req.method} ${req.path} - Query:`, req.query);
  }
  next();
});

const houses = [
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
  {
    id: '0367baf3-1cb6-4baf-bede-48e17e1cd005',
    name: 'Gryffindor',
    houseColours: 'Scarlet and gold',
    founder: 'Godric Gryffindor',
    animal: 'Lion',
    element: 'Fire',
    ghost: 'Nearly-Headless Nick',
    commonRoom: 'Gryffindor Tower',
    heads: [
      {
        id: '530da97d-5a83-4ea6-bc15-790edf5b5efc',
        firstName: 'Minerva',
        lastName: 'McGonagall',
      },
      {
        id: '9915c5f8-9177-4f63-bba8-d04387a404f9',
        firstName: 'Godric',
        lastName: 'Gryffindor',
      },
    ],
    traits: [
      {
        id: '1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b',
        name: 'Courage',
      },
      {
        id: '21f22e43-efd9-4a43-87f5-eab5fb1666ea',
        name: 'Chivalry',
      },
      {
        id: '60d8f5d0-de4b-41f7-b152-40543555bf3a',
        name: 'Nerve',
      },
      {
        id: '68f73efc-fae9-4a54-b3e2-04bbe72f5d63',
        name: 'Daring',
      },
      {
        id: '7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd',
        name: 'Determination',
      },
      {
        id: 'adf83e9f-859b-41c4-947d-b359a05f8f3c',
        name: 'Bravery',
      },
    ],
  },
  {
    id: '805fd37a-65ae-4fe5-b336-d767b8b7c73a',
    name: 'Ravenclaw',
    houseColours: 'Blue and bronze',
    founder: 'Rowena Ravenclaw',
    animal: 'Eagle',
    element: 'Air',
    ghost: 'Grey Lady',
    commonRoom: 'Ravenclaw Tower',
    heads: [
      {
        id: '102ac5fc-db71-4055-8250-bc238cffb3d9',
        firstName: 'Filius',
        lastName: 'Flitwick',
      },
      {
        id: '57c04cf4-f3dd-46d6-a78f-84c30fb42533',
        firstName: 'Rowena',
        lastName: 'Ravenclaw',
      },
    ],
    traits: [
      {
        id: '08a54d21-6137-4eda-9c32-004706650b44',
        name: 'Learning',
      },
      {
        id: '5056effc-b92b-4f86-96fd-978b26a849da',
        name: 'Acceptance',
      },
      {
        id: '78db6224-33d1-490d-a553-9bbbedb3282a',
        name: 'Intelligence',
      },
      {
        id: 'ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a',
        name: 'Wisdom',
      },
      {
        id: 'e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3',
        name: 'Wit',
      },
      {
        id: 'ffc55017-c03f-490a-9c48-2f38af6e2f0a',
        name: 'Creativity',
      },
    ],
  },
  {
    id: '85af6295-fd01-4170-a10b-963dd51dce14',
    name: 'Hufflepuff',
    houseColours: 'Yellow and black',
    founder: 'Helga Hufflepuff',
    animal: 'Badger',
    element: 'Earth',
    ghost: 'Fat Friar',
    commonRoom: 'Hufflepuff Basement',
    heads: [
      {
        id: 'a593e800-95dc-47ab-9243-6ac98d2f6ab4',
        firstName: 'Helga',
        lastName: 'Hufflepuff',
      },
      {
        id: 'fab07935-774e-4eb4-8ed5-621bfe416d85',
        firstName: 'Pomona',
        lastName: 'Sprout',
      },
    ],
    traits: [
      {
        id: '22d8bc5b-67ee-49fb-89ee-8811fc22062b',
        name: 'Hardworking',
      },
      {
        id: '76973c67-0dd1-4aca-b0b7-b053d9eaf206',
        name: 'Patience',
      },
      {
        id: 'a8494f18-caff-491e-96e3-1ff73bd6f4ab',
        name: 'Loyalty',
      },
      {
        id: 'af80b93e-3c61-4586-824a-8f7e6ac4ae0a',
        name: 'Just',
      },
      {
        id: 'c080647f-5b31-434f-8327-376abbfb0989',
        name: 'Fairness',
      },
      {
        id: 'f62f4753-fdb5-473b-a8ac-07c1b5844eec',
        name: 'Modesty',
      },
    ],
  },
  {
    id: 'a9704c47-f92e-40a4-8771-ed1899c9b9c1',
    name: 'Slytherin',
    houseColours: 'Green and silver',
    founder: 'Salazar Slytherin',
    animal: 'Serpent',
    element: 'Water',
    ghost: 'Bloody Baron',
    commonRoom: 'Slytherin Dungeon',
    heads: [
      {
        id: '36ba2ceb-6b6f-48a3-b512-9c1e66321eff',
        firstName: 'Horace',
        lastName: 'Slughorn',
      },
      {
        id: '5cac8ad3-b5fc-4c48-a951-990cdd5671bc',
        firstName: 'Salazar',
        lastName: 'Slytherin',
      },
      {
        id: 'ef90f8c9-9f03-478e-baec-8a3c487e5271',
        firstName: 'Severus',
        lastName: 'Snape',
      },
    ],
    traits: [
      {
        id: '0992c505-80dd-4b49-ad0b-3b7383d6ec89',
        name: 'Resourcefulness',
      },
      {
        id: '36dad9bf-010e-47ef-8908-ecb6d5acfac5',
        name: 'Self-preservation',
        consistency,
      },
      {
        id: '42b7c304-5e62-4fae-9e52-f8c6a106e406',
        name: 'Ambition',
      },
      {
        id: '540aaafe-6185-4dc8-94ed-bd0236b433d3',
        name: 'Cunning',
      },
      {
        id: 'd7b7c1b7-3fce-4474-9fd1-9b731e0b2649',
        name: 'Pride',
      },
      {
        id: 'df43d46b-1ebf-409d-a63e-6c6bcb049aef',
        name: 'Determination',
      },
    ],
  },
];

const createPaginationMeta = (totalItems, page, limit) => {
  const totalPages = Math.ceil(totalItems / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    currentPage: page,
    totalPages,
    totalItems,
    itemsPerPage: limit,
    hasNextPage,
    hasPreviousPage,
    nextPage: hasNextPage ? page + 1 : null,
    previousPage: hasPreviousPage ? page - 1 : null,
  };
};

const paginateArray = (array, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return array.slice(startIndex, endIndex);
};

app.get('/health', (req, res) => {
  console.log('Health check called');
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    housesCount: houses.length,
  });
});

app.get('/houses', (req, res) => {
  console.log('Houses endpoint called');

  try {
    const { name, page = 1, limit = 20 } = req.query;

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));

    let filteredHouses = houses;

    if (name) {
      filteredHouses = houses.filter((house) =>
        house.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(
        `Filtered by "${name}", found ${filteredHouses.length} houses`
      );
    }

    const paginatedHouses = paginateArray(filteredHouses, pageNum, limitNum);
    const pagination = createPaginationMeta(
      filteredHouses.length,
      pageNum,
      limitNum
    );

    console.log(
      `Page ${pageNum}, showing ${paginatedHouses.length} of ${filteredHouses.length} houses`
    );

    res.status(200).json({
      data: paginatedHouses,
      pagination,
    });
  } catch (error) {
    console.error('Error in /houses route:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

app.get('/houses/all', (req, res) => {
  console.log('All houses endpoint called (no pagination)');

  try {
    const { name } = req.query;

    if (!name) {
      console.log(`Returning all houses (${houses.length} total)`);
      return res.status(200).json(houses);
    }

    const filteredHouses = houses.filter((house) =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );

    console.log(`Filtered by "${name}", found ${filteredHouses.length} houses`);
    res.status(200).json(filteredHouses);
  } catch (error) {
    console.error('Error in /houses/all route:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

app.get('/houses/:id', (req, res) => {
  console.log('House by ID called:', req.params.id);

  try {
    const { id } = req.params;
    const house = houses.find((h) => h.id === id);

    if (!house) {
      console.log('House not found:', id);
      return res.status(404).json({ error: 'House not found' });
    }

    console.log('Found house:', house.name);
    res.status(200).json(house);
  } catch (error) {
    console.error('Error in /houses/:id route:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

app.use((req, res) => {
  console.log('404 - Route not found:', req.method, req.path);
  res.status(404).json({
    error: 'Route not found',
    method: req.method,
    path: req.path,
    availableRoutes: ['/health', '/houses', '/houses/all', '/houses/:id'],
  });
});

app.listen(PORT, () => {
  console.log(`🏰 Hogwarts Houses API server running on port ${PORT}`);
  console.log(`📊 Loaded ${houses.length} houses`);
  console.log(`📡 API endpoints:`);
  console.log(`   GET /health - Health check`);
  console.log(
    `   GET /houses - Get houses with pagination (default: page=1, limit=20)`
  );
  console.log(`   GET /houses/all - Get all houses without pagination`);
  console.log(
    `   GET /houses?name=<search> - Filter houses by name (with pagination)`
  );
  console.log(`   GET /houses/:id - Get house by ID`);
  console.log(`\n🔍 Example queries:`);
  console.log(`   http://localhost:${PORT}/houses`);
  console.log(`   http://localhost:${PORT}/houses?page=1&limit=2`);
  console.log(`   http://localhost:${PORT}/houses?name=ffi&page=1&limit=10`);
  console.log(`   http://localhost:${PORT}/houses/all`);
  console.log(`\n📄 Pagination parameters:`);
  console.log(`   page: Page number (default: 1, min: 1)`);
  console.log(`   limit: Items per page (default: 20, min: 1, max: 100)`);
});

module.exports = app;

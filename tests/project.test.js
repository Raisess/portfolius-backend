const fb = require('firebase');
const config = require('../src/firebase/firebase.json');
fb.initializeApp(config);

const { create, update } = require('../src/controllers/project.controller');

it('create a project :: {} === true', () => {
  return create({
    username: "teste",
    name: "teste",
    description: "teste",
    cover: "teste",
    link: "teste",
    git: "teste",
    color: "teste"
  })
    .then(bool => expect(bool).toBe(true));
});

it('update a project :: {} === true', () => {
  return update('HGWiuhOKQLTJiaX0', 'teste', {
    name: "teste2",
    description: "teste",
    cover: "teste",
    link: "teste",
    git: "teste",
    color: "teste"
  })
    .then(bool => expect(bool).toBe(true));
});
const users = [
  { _id: 1, index: 0, age: 21, email: 'email1', phone: '123123', name: 'Pedro' },
  { _id: 2, index: 1, age: 27, email: 'email2', phone: '456456', name: 'Camila' },
];

export default {
  Query: {
    listar: () => users,
  },
};

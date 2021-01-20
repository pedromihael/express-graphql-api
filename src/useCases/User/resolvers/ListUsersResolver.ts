import IUseFilter from '@useCases/User/resolvers/IUseFilters';

const users = [
  { _id: 1, index: 0, age: 21, email: 'email1', phone: '123123', name: 'Pedro' },
  { _id: 2, index: 1, age: 27, email: 'email2', phone: '456456', name: 'PedCamila' },
  { _id: 3, index: 2, age: 22, email: 'email3', phone: '789789', name: 'Pedroncio' },
];

export default {
  Query: {
    list: () => users,
    listOne(context, { name }) {
      return users.filter((user) => user.name.match(new RegExp(name, 'g')));
    },
  },
};

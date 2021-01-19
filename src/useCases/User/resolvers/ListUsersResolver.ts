export default {
  Query: {
    listar(name: string) {
      if (name) return name;
      else return 'todos os usuarios';
    },
  },
};

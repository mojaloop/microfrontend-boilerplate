export default {
  create: {
    delay: 500,
    call: () => ({
      status: 200,
      data: {
        name: 'test',
        lastname: 'test',
        address: 'test',
      },
    }),
  },
};

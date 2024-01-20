export const GET = async (request: Request) => {
  const user = {
    age: 20,
    gender: 'man',
    userName: 'umjoonsick',
    userId: 'udgsdmlkfs',
  };
  return Response.json(user);
};

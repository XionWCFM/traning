export const GET = async (request: Request) => {
  return new Response(
    JSON.stringify({
      status: 'success',
    }),
    {
      status: 201,
    },
  );
};

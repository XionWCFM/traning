export const POST = async (request: Request) => {
  console.log(request);
  return new Response(
    JSON.stringify({
      status: 'success',
      receive: request.body,
    }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

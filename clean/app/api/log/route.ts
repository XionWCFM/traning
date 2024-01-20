export const POST = async (request: Request) => {
  const body = await request.json();
  return new Response(
    JSON.stringify({
      status: 'success',
      receive: body,
    }),
    {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};

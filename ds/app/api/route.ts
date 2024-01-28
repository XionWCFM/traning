import { cookies } from 'next/headers';

export const GET = (request: Request, response: Response) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  return Response.json(
    {
      data: 'helloworld',
    },
    {
      status: 200,
      headers: { 'Set-Cookie': `token=${'hi'}` },
    },
  );
};

export const POST = () => {
  return Response.json(
    {
      data: 'helloworld',
    },
    {
      status: 400,
    },
  );
};

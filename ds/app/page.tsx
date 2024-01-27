'use client';
import xionFetch from '@/src/fetch';

const fetchExtend = xionFetch({
  baseUrl: '',
  headers: {
    'Content-type': 'application/json',
  },
  interceptors: {
    request: async (args) => {
      console.group('🙃 hello world 🙃');
      console.log('url " ', args[0].toString());
      console.log('request init : ', args[1], '\n\n');
      return args;
    },
    response: async (response) => {
      console.log('response intercepting', response.status);
      if (response.status >= 400) {
        throw await response.text().then(Error);
      }
      return response;
    },
  },
});

export default function Home() {
  return (
    <div className=" py-16 px-12">
      <button className=" px-10 w-2/5 py-2  bg-positive text-sub-title-1 text-positive-foreground  ">
        hello world
        <div className=" text-foreground/20 ">dsadsa </div>
      </button>
      <div className=" w-16 h-16 bg-primary animate-in fade-in-40 delay-300 duration-300 animate-out fade-out-40 "></div>
    </div>
  );
}

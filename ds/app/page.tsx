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
    <div className=" px-12 py-12">
      <div className=" text-positive border border-positive">
        <div className="">gds</div>
      </div>
      <div className=" text-secondary-foreground bg-secondary">세컨더리</div>
      <div className=" text-primary-foreground bg-primary-muted">
        프라이머리 뮤티드
      </div>
      <div className=" text-primary-foreground bg-primary-hover">
        프라이머리 호버
      </div>
      <div className=" text-primary-foreground bg-primary-accent">
        프라이머리 호버
      </div>
      <div className=" text-primary-foreground bg-primary">프라이머리</div>
      <div className=" text-negative-foreground bg-negative">네거티브</div>

      <div className=" text-header-1 font-header-1 leading-header-1 text-foreground/30">
        안녕하세요
      </div>
      <button className=" px-10 w-2/5 py-2  bg-positive text-sub-title-1 text-positive-foreground  ">
        hello world
        <div className=" text-foreground/20 ">dsadsa </div>
      </button>
    </div>
  );
}

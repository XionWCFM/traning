import { useRouter } from 'next/navigation';

type FunnelRouter = {
  back: () => void;
  push: (url: string) => void;
  replace: (url: string) => void;
};

class Funnel {
  private stack: string[] = [];
  private pageCount: number = 0;
  constructor(private router: FunnelRouter) {}
  async start(url: string) {
    this.pageCount = 0;
    
  }
  async end() {}
}

const useF = () => {
  const router = useRouter();
  const funnel = new Funnel(router);
};

import AuthPage from '@/src/@apps/user/ui/auth.page';
import Cli from './_component/Cli';
import Ser from './_component/Ser';

export default function Home() {
  return (
    <div className="">
      <Cli Comp={<Ser />} />
    </div>
  );
}

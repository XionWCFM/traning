'use client';

import { useUserQuery } from '@/src/@infrastructure/store/server/api/user/use-user-query';

export default function Home() {
  const user = useUserQuery();
  return (
    <div className="">
      <div className="">{user.data.userName}</div>
    </div>
  );
}

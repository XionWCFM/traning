'use client';

import { useUserQuery } from '@/src/@infrastructure/store/server/api/user/use-user-query';

export default function Home() {
  const user = useUserQuery();
  if (user.data === null) return null;
  return (
    <div className="">
      <div className="">{user.data.userName}</div>
    </div>
  );
}

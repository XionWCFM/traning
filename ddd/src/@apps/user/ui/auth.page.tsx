'use client';
import React from 'react';
import { useAuthenticate } from '../application/implement';

interface AuthPageProps {}

const AuthPage = ({}: AuthPageProps) => {
  const auth = useAuthenticate();
  const [userName, updateUserName] = React.useState('');
  const [email, updateEmail] = React.useState('');

  const onClick = () => auth.authenticate(userName, email);

  return (
    <div>
      <div className="">현재 유저객체는</div>
      <div className="">{auth.user?.name}</div>
      <div className="">{auth.user?.email}</div>
      <div className="">이름과 이메일을 입력하세요</div>
      <input
        type="text"
        onChange={(e) => updateUserName(e.target.value)}
        placeholder="이름입력"
      />
      <input
        type="text"
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="이메일입력"
      />
      <button onClick={onClick}>제출하세요</button>
    </div>
  );
};

export default AuthPage;

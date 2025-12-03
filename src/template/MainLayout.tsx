import { type PropsWithChildren } from 'react';
import { Header } from '@/components/Header';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header>
        <div className="container mx-auto">
          <button className="mr-2" type="button">
            =
          </button>
          <span className="text-2xl font-bold">排班表</span>
        </div>
      </Header>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

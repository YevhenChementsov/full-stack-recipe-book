import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="m-[0_auto] grid min-h-screen min-w-[320px] max-w-[1440px] grid-rows-[auto_1fr_auto] px-5 gap-8">
      {children}
    </div>
  );
};

export default Container;

import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <Container>
      <Header />

      <main className="flex flex-col gap-5">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </Container>
  );
};

export default Layout;

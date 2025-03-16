import Container from '@/components/Container/Container';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <Container>
      <main className="flex h-screen flex-col items-center justify-center gap-4 px-5">
        <h1 className="animate-bounce text-8xl">
          <span className="text-red-600">O</span>
          <span className="text-yellow-400">o</span>
          <span className="text-green-600">p</span>
          <span className="text-blue-800">s</span>
          <span className="text-purple-800">!</span>
        </h1>
        <p className="text-xl font-semibold">404 - PAGE NOT FOUND</p>
        <i className="text-center">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable
        </i>
      </main>
    </Container>
  );
};

export default NotFoundPage;

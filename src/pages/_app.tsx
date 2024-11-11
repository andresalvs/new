import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {memo, useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import Loading from '../components/Loading';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      // Minimum 4 seconds delay before fading out the loader
      setTimeout(() => setLoading(false), 4000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <Loading />}
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;

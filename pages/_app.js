import Header from '../component/header/header.component';
import { StoreLocationProvider } from '../context/StoreLocationContext';
import '../styles/global.css'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <StoreLocationProvider>
      <Header />
      <Component {...pageProps} />
    </StoreLocationProvider>
    </>
  );
}
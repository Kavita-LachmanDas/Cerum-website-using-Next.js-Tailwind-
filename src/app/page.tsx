import Head from 'next/head';

import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Spinner from './components/Spinner';
import MainContent from './components/MainContent';


export default function Home() {
  return (
    <div>
      <Head>
        <title>🦋GoodHabit🦋</title>
        
       
      </Head>

    
      <LoginForm />
      <Spinner />
      <MainContent />
       <Footer />
    </div>
  );
}

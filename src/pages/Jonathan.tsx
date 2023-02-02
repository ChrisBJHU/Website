import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../Jonathan/components/Layout/Page';
import About from '../Jonathan/components/Sections/About';
import Contact from '../Jonathan/components/Sections/Contact';
import Footer from '../Jonathan/components/Sections/Footer';
import Hero from '../Jonathan/components/Sections/Hero';
import Portfolio from '../Jonathan/components/Sections/Portfolio';
import Resume from '../Jonathan/components/Sections/Resume';
import Testimonials from '../Jonathan/components/Sections/Testimonials';
import {homePageMeta} from '../Jonathan/data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../Jonathan/components/Sections/Header'), {ssr: false});

const Jonathan: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Page>
  );
});

export default Jonathan;

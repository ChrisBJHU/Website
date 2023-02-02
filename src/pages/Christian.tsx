import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../Christian/components/Layout/Page';
import About from '../Christian/components/Sections/About';
import Contact from '../Christian/components/Sections/Contact';
import Footer from '../Christian/components/Sections/Footer';
import Hero from '../Christian/components/Sections/Hero';
import Portfolio from '../Christian/components/Sections/Portfolio';
import Resume from '../Christian/components/Sections/Resume';
import Testimonials from '../Christian/components/Sections/Testimonials';
import {homePageMeta} from '../Christian/data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../Christian/components/Sections/Header'), {ssr: false});

const Christian: FC = memo(() => {
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

export default Christian;

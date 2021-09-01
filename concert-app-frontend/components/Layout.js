import Head from 'next/head';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical event',
  keywords: 'music , dj , edm, events',
};

export default Layout;

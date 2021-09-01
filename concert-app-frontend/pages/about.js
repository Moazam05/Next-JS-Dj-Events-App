import Layout from '../components/Layout';
import { useRouter } from 'next/dist/client/router';

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout title='About DJ Events'>
        <h1>About Page</h1>
        <p>This is an app to find the latest DJ and other musical events</p>
        <p>Version: 1.0.0</p>

        <button onClick={() => router.push('/')}>Home</button>
      </Layout>
    </>
  );
};

export default AboutPage;

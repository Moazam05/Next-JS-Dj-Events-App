import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/dist/client/router';

import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className='background-not'>
        <div className='not-wrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='error-template'>
                  <h1>Oops!</h1>
                  <h2 className='icon-not'>
                    <FaExclamationTriangle />{' '}
                    <span className='ms-3'>404 Not Found</span>
                  </h2>
                  <div className='error-details'>
                    Sorry, an error has occured, Requested page not found!
                  </div>
                  <div className='error-actions'>
                    {/* <a href='/' className='btn btn-primary btn-lg'>
                    <span className='glyphicon glyphicon-home'></span>
                    Take Me Home{' '}
                  </a> */}
                    <Button
                      variant='contained'
                      color='secondary'
                      onClick={() => router.push('/')}
                      // href='#contained-buttons'
                    >
                      Take Me Home
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

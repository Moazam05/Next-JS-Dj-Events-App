import Layout from '../../components/Layout';

import { API_URL } from '../../config/index';

import { FaPencilAlt, FaTimes, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const EventPage = ({ evt }) => {
  const router = useRouter();

  const deleteEvent = () => {
    console.log('delete');
  };
  console.log(evt);
  var singleEvent = evt[0];

  return (
    <Layout>
      <div className='title-slug'>
        <div className='container col-xxl-8 px-4 py-5'>
          <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
            <div className='col-10 col-sm-8 col-lg-6'>
              <img
                src={singleEvent.image.formats.large.url}
                className='d-block mx-lg-auto img-fluid'
                alt='Bootstrap Themes'
                width='700'
                height='500'
                loading='lazy'
              />
            </div>
            <div className='col-lg-6'>
              <p className='lead'>
                {new Date(singleEvent.date).toLocaleDateString('en-US')} at{' '}
                {singleEvent.time}
              </p>

              <h1 className='display-6 fw-bold lh-1 mb-3'>{singleEvent.name}</h1>
              <p className='lead'>{singleEvent.description}</p>
              <span className='fw-bold'>Performers : </span>
              <p className='lead'>{singleEvent.performance}</p>
              <span className='fw-bold'>Venue: :</span>
              <p className='lead'>{singleEvent.venue}</p>
              <span className='fw-bold'>Address :</span>
              <p className='lead'>{singleEvent.address}</p>

              <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                <button
                  type='button'
                  className='btn btn-primary px-4 me-md-2'
                  onClick={() => router.push(`/events/edit/${evt.id}`)}
                >
                  <FaPencilAlt /> Edit Event
                </button>
                <button
                  type='button'
                  className='btn btn-outline-danger px-4'
                  onClick={deleteEvent}
                >
                  <FaTimes /> Delete Event
                </button>
              </div>
              <div className='d-grid gap-2 d-md-flex justify-content-md-start mt-5'>
                <button
                  type='button'
                  className='btn btn-secondary px-4 me-md-2'
                  // style={{ width: '140px' }}
                  onClick={() => router.push(`/events`)}
                >
                  <FaChevronLeft /> Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const evt = await res.json();
  // console.log(evt, 'second');

  // Get the paths we want to pre-render based on posts
  const paths = evt.map((evt) => ({
    params: { slug: evt.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const evt = await res.json();
  // console.log(evt, 'first');

  return {
    props: {
      evt,
    },
    revalidate: 1,
  };
}

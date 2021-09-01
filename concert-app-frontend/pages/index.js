import Layout from '../components/Layout';

import ShowCase from '../components/ShowCase/ShowCase';
import { API_URL } from '../config/index';
import EventItem from '../components/EventItem/EventItem';
import { useRouter } from 'next/dist/client/router';

export default function HomePage({ events }) {
  // console.log(events);
  const router = useRouter();
  return (
    <>
      <Layout>
        <ShowCase />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='events-home'>Upcoming Events</div>
              {events.length === 0 && <h3>No events to show</h3>}
              <div>
                {events.map((evt) => (
                  <EventItem key={evt.id} evt={evt} />
                ))}
              </div>
              <div className='all-ev'>
                <button
                  type='button'
                  className='btn btn-outline-secondary'
                  onClick={() => router.push('/events')}
                >
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();
  // console.log(events);
  return {
    props: { events }, // will be passed to the page component as props
    revalidate: 1,
  };
}

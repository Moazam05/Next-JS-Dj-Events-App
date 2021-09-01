import Layout from '../../components/Layout';

import ShowCase from '../../components/ShowCase/ShowCase';
import { API_URL } from '../../config/index';
import EventItem from '../../components/EventItem/EventItem';

export default function EventsPage({ events }) {
  console.log(events);
  return (
    <>
      <Layout>
        <ShowCase />
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='events-home'> Events</div>
              {events.length === 0 && <h3>No events to show</h3>}
              <div>
                {events.map((evt) => (
                  <EventItem key={evt.id} evt={evt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
  const events = await res.json();
  // console.log(events);
  return {
    props: { events }, // will be passed to the page component as props
    revalidate: 1,
  };
}

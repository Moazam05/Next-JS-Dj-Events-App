import { useRouter } from 'next/dist/client/router';

const EventItem = ({ evt }) => {
  const router = useRouter();
  return (
    <>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={
                evt.image
                  ? evt.image.formats.thumbnail.url
                  : '/images/event-default.png'
              }
              alt='not found'
              className='img-fluid'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                {evt.name}
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => router.push(`events/${evt.slug}`)}
                >
                  Details
                </button>
              </h5>
              <p className='card-text'>{evt.description}</p>
              <p className='card-text'>
                <small className='text-muted'>
                  {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventItem;

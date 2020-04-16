import createElement from "../shared/components.js";
import formatDate from "../shared/formatDate.js";
import Paginator from "../shared/Paginator/Paginator.js";

const EventsComponent = (props) => {
  const {
    events = [],
    type,
    queryStringParams: { page = 1, size = 10 },
  } = props;

  const createEventsPageUrl = (pageNumber) => {
    return `/${type}/?page=${pageNumber}&size=${size}`;
  };

  return (
    <div>
      <h1 class="title">Events</h1>
      {events.length ? (
        Paginator({
          pageNumber: page,
          data: events,
          pageSize: size,
          Component: (props) => {
            const { data = [] } = props;

            return (
              <ul class="events">
                {data.length ? (
                  data.map((e) => {
                    return (
                      <li class="event">
                        <p class="event__date">{formatDate(e.date)}</p>
                        <div class="event__location">
                          <p class="geolocation">{`${e.city}, ${e.country}`}</p>
                          <p class="arena">{e.place}</p>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <p class="events-info">
                    {`There are no planned events at the moment. 
                    Follow our social media to stay informed`}
                  </p>
                )}
              </ul>
            );
          },
          createUrl: createEventsPageUrl,
        })
      ) : (
        <p class="events-info">
          {`There are no planned events at the moment. 
        Follow our social media to stay informed`}
        </p>
      )}
    </div>
  );
};

export default EventsComponent;

import EventsList from '../components/EventsList';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Web Development Bootcamp',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop',
    date: '2025-12-15',
    description: 'Learn modern web development from scratch',
  },
  {
    id: 'e2',
    title: 'React Conference 2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    date: '2025-12-20',
    description: 'Annual React conference with industry experts',
  },
  {
    id: 'e3',
    title: 'JavaScript Meetup',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop',
    date: '2025-12-25',
    description: 'Monthly JavaScript community meetup',
  },
];

function EventsPage() {
  return <EventsList events={DUMMY_EVENTS} />;
}

export default EventsPage;

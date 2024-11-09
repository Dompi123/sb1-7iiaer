import React from 'react';
import { ChevronLeft } from 'lucide-react';

function App() {
  const [activeScreen, setActiveScreen] = useState('venues');
  const [selectedVenue, setSelectedVenue] = useState(null);

  // Core functionality and state management
  const handleVenueSelect = (venue) => {
    setSelectedVenue(venue);
    setActiveScreen('venue');
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white`}>
      {/* Header - Consistent across screens */}
      <header className="flex items-center justify-between border-b border-gray-800 p-4">
        {activeScreen !== 'venues' && (
          <Button variant="secondary" onClick={() => setActiveScreen('venues')}>
            <ChevronLeft className="h-6 w-6" />
          </Button>
        )}
        <h1 className="text-2xl font-bold tracking-tight">
          {activeScreen === 'venues' ? 'Venues' : selectedVenue?.name}
        </h1>
        <div className="w-10" /> {/* Spacer for alignment */}
      </header>

      {/* Dynamic Content Area */}
      <main className="p-6 space-y-6">
        {/* Content changes based on activeScreen */}
        {activeScreen === 'venues' && (
          <VenueList onVenueSelect={handleVenueSelect} />
        )}
        {activeScreen === 'venue' && selectedVenue && (
          <VenueDetail venue={selectedVenue} />
        )}
      </main>
    </div>
  );
}

const Button = ({ children, variant = 'primary', ...props }) => (
  <button
    className={`
      rounded-xl px-6 py-3 font-medium
      ${variant === 'primary' 
        ? 'bg-gradient-to-r from-[#9D5CFF] to-[#FF3B7F] hover:opacity-90'
        : 'bg-gray-800 hover:bg-gray-700'}
      focus:ring-2 focus:ring-[#9D5CFF] focus:outline-none
      transition-all duration-200
    `}
    {...props}
  >
    {children}
  </button>
);

const VenueList = ({ onVenueSelect }) => {
  const venues = [
    {
      id: 1,
      name: "Stephen's",
      description: "Don't waste your night in line!",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "The Rooftop",
      description: "Enjoy the city skyline",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Underground",
      description: "Experience the best underground music",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-4">
      {venues.map((venue) => (
        <div
          key={venue.id}
          onClick={() => onVenueSelect(venue)}
          className="rounded-xl border border-gray-800 bg-[#1A1A1A] p-6 shadow-lg backdrop-blur-sm hover:opacity-90 transition-all duration-200 cursor-pointer"
        >
          <div className="flex gap-4">
            <div className="h-20 w-20 rounded-lg bg-gray-800" />
            <div>
              <h2 className="text-xl font-semibold mb-2">{venue.name}</h2>
              <p className="text-white/85">{venue.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const VenueDetail = ({ venue }) => {
  return (
    <div className="space-y-6">
      <div className="aspect-video w-full rounded-xl bg-gray-800" />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">{venue.name}</h2>
        <p className="text-white/85">{venue.description}</p>
      </div>
    </div>
  );
};

export default App;
import React from 'react';
import { Users, MapPin, Clock } from 'lucide-react';
import { Card } from './Card';
import { Badge } from './Badge';
import { styles } from '../styles';

const venues = [
  {
    id: 1,
    name: "Neon Garden",
    description: "Live DJ sets & craft cocktails in a vibrant atmosphere",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    attending: 142,
    status: "Filling Fast",
    time: "10 PM - 3 AM",
    location: "Downtown"
  },
  {
    id: 2,
    name: "Sky Lounge",
    description: "Rooftop vibes with panoramic city views",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80",
    attending: 89,
    status: "Hot Tonight",
    time: "8 PM - 2 AM",
    location: "Midtown"
  },
  {
    id: 3,
    name: "The Underground",
    description: "Alternative music & artistic crowd",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80",
    attending: 203,
    status: "Almost Full",
    time: "9 PM - 4 AM",
    location: "Arts District"
  }
];

interface VenueListProps {
  onVenueSelect: (venue: any) => void;
}

export const VenueList: React.FC<VenueListProps> = ({ onVenueSelect }) => {
  return (
    <div className={styles.spacing.layout}>
      <div className="space-y-4">
        {venues.map((venue) => (
          <button
            key={venue.id}
            className="w-full text-left"
            onClick={() => onVenueSelect(venue)}
          >
            <Card className="group hover:scale-[1.02] active:scale-[0.98]">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    color="hot"
                    className="absolute top-4 right-4"
                  >
                    {venue.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h2 className={`${styles.typography.heading} group-hover:text-fuchsia-400 ${styles.animation}`}>
                      {venue.name}
                    </h2>
                    <div className="flex items-center gap-1 text-fuchsia-400">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-medium">{venue.attending}</span>
                    </div>
                  </div>
                  
                  <p className={styles.colors.text.secondary}>
                    {venue.description}
                  </p>
                  
                  <div className="flex gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{venue.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{venue.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    </div>
  );
};
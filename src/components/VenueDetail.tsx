import React from 'react';
import { Users, MapPin, Clock, Heart, Share2, MessageCircle, Zap } from 'lucide-react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { styles } from '../styles';

interface VenueDetailProps {
  venue: any;
  onUpgradeClick: () => void;
}

export const VenueDetail: React.FC<VenueDetailProps> = ({ venue, onUpgradeClick }) => {
  if (!venue) return null;

  return (
    <div className={styles.spacing.layout}>
      <div className="relative h-64 rounded-3xl overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="space-y-2">
            <Badge color="hot">{venue.status}</Badge>
            <h1 className={`${styles.typography.heading} text-3xl`}>
              {venue.name}
            </h1>
            <div className="flex gap-4 text-sm text-white/80">
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{venue.attending} attending</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{venue.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className={styles.typography.heading}>About</h2>
            <p className={styles.colors.text.secondary}>
              {venue.description}
            </p>
          </div>

          <div className="flex gap-4">
            <Button 
              className="flex-1 flex items-center justify-center gap-2"
              onClick={onUpgradeClick}
            >
              <Zap className="h-5 w-5" />
              Join Tonight
            </Button>
            <Button
              variant="secondary"
              className="p-3"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button
              variant="secondary"
              className="p-3"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className={styles.typography.heading}>Live Chat</h2>
            <Badge>{venue.attending} active</Badge>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Alex</span>
                  <span className="text-sm text-white/40">2m ago</span>
                </div>
                <p className={styles.colors.text.secondary}>
                  Anyone heading there now? Looking for a group to join! 🎉
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Send a message..."
              className="flex-1 bg-white/5 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
            <Button variant="secondary" className="p-2">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
import React from 'react';
import { Crown, Zap, Users, Clock, Shield, ChevronLeft, Sparkles, Star } from 'lucide-react';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { styles } from '../styles';

interface PlanOption {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  savings?: string;
}

const plans: PlanOption[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$9.99',
    period: 'month',
  },
  {
    id: 'annual',
    name: 'Annual',
    price: '$79.99',
    period: 'year',
    popular: true,
    savings: 'Save 33%'
  }
];

const features = [
  {
    icon: Crown,
    title: 'VIP Line Skip',
    description: 'Walk right in, no waiting'
  },
  {
    icon: Star,
    title: 'Member Events',
    description: 'Exclusive parties & meetups'
  },
  {
    icon: Clock,
    title: '24h Early Access',
    description: 'Book before everyone else'
  },
  {
    icon: Shield,
    title: 'Priority Support',
    description: 'Help when you need it'
  }
];

interface PaywallScreenProps {
  onBack: () => void;
}

export const PaywallScreen: React.FC<PaywallScreenProps> = ({ onBack }) => {
  const [selectedPlan, setSelectedPlan] = React.useState<string>('annual');

  return (
    <div className={`min-h-screen ${styles.colors.bg} ${styles.colors.text.primary}`}>
      <header className="sticky top-0 z-10 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-fuchsia-400" />
            <span className={styles.typography.heading}>Premium</span>
          </div>
          <div className="w-10" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto pb-20">
        <div className={styles.spacing.layout}>
          <div className="text-center space-y-4">
            <Badge color="hot" className="mx-auto inline-flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span>Level Up</span>
            </Badge>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Never Miss Out Again
            </h1>
            <p className={`${styles.colors.text.secondary} max-w-md mx-auto`}>
              Join the elite crowd with exclusive perks and VIP access
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className="w-full text-left group"
              >
                <Card
                  highlight={selectedPlan === plan.id}
                  className={`
                    relative overflow-hidden
                    hover:scale-[1.02] active:scale-[0.98]
                    ${selectedPlan === plan.id ? 'border-fuchsia-500' : ''}
                  `}
                >
                  {plan.popular && (
                    <div className="absolute -right-12 top-5 rotate-45 bg-gradient-to-r from-fuchsia-600 to-pink-600 px-12 py-1 text-xs font-medium">
                      Best Value
                    </div>
                  )}
                  <div className="space-y-3">
                    <h3 className={`${styles.typography.heading} group-hover:text-fuchsia-400`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className={styles.colors.text.secondary}>/{plan.period}</span>
                    </div>
                    {plan.savings && (
                      <Badge color="hot" className="mt-2">{plan.savings}</Badge>
                    )}
                  </div>
                </Card>
              </button>
            ))}
          </div>

          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent" />
            <div className="relative space-y-6">
              <h2 className={styles.typography.heading}>Premium Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold group-hover:text-fuchsia-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className={`${styles.colors.text.secondary} text-sm mt-1`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Button
            className="w-full text-lg py-4 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            onClick={() => console.log('Upgrade to', selectedPlan)}
          >
            <Crown className="h-5 w-5" />
            Get Premium Access
          </Button>
        </div>
      </main>
    </div>
  );
};
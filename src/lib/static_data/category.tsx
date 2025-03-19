import {
  AlarmClockIcon,
  CheckCheckIcon,
  CheckCircleIcon,
  CircleAlertIcon,
  DollarSignIcon,
  DumbbellIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  NotebookPenIcon,
  OctagonXIcon,
  RecycleIcon,
  WaypointsIcon,
} from 'lucide-react';
import { JSX } from 'react';

type Category = {
  key: string;
  name: string;
  icon: JSX.Element;
};

type Status = {
  key: string;
  name: string;
  icon: JSX.Element;
};

type CategoryMap = {
  [key: string]: Category;
};

type StatusMap = {
  [key: string]: Status;
};

export const categories = [
  {
    key: 'HEALTH_FITNESS',
    name: 'health and fitness',
    icon: <DumbbellIcon />,
  },
  {
    key: 'PERSONAL_GROWTH',
    name: 'personal growth and learning',
    icon: <NotebookPenIcon />,
  },
  {
    key: 'PRODUCTIVITY',
    name: 'productivity and work',
    icon: <LightbulbIcon />,
  },
  {
    key: 'MENTAL_WELLBEING',
    name: 'mental and emotional wellbeing',
    icon: <HeartHandshakeIcon />,
  },
  {
    key: 'RELATIONSHIPS',
    name: 'relationships and social connections',
    icon: <WaypointsIcon />,
  },
  {
    key: 'FINANCES',
    name: 'finances and money management',
    icon: <DollarSignIcon />,
  },
  {
    key: 'SUSTAINABILITY',
    name: 'sustainability and environment',
    icon: <RecycleIcon />,
  },
  {
    key: 'OTHER',
    name: 'other',
    icon: <CircleAlertIcon />,
  },
];

export const reduceCategory: CategoryMap = categories.reduce<CategoryMap>(
  (acc, { key, name, icon }) => {
    acc[key] = { key, name, icon };
    return acc;
  },
  {}
);

export const statuses = [
  {
    key: 'ACTIVE',
    name: 'active',
    icon: <CheckCircleIcon />,
  },
  {
    key: 'UPCOMING',
    name: 'upcoming',
    icon: <AlarmClockIcon />,
  },
  {
    key: 'COMPLETED',
    name: 'completed',
    icon: <CheckCheckIcon />,
  },
  {
    key: 'MISSED',
    name: 'missed',
    icon: <OctagonXIcon />,
  },
];

export const reduceStatuses = statuses.reduce<StatusMap>(
  (acc, { key, name, icon }) => {
    acc[key] = { key, name, icon };
    return acc;
  },
  {}
);

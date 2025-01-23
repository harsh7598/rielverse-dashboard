import { ROUTES } from './routes';
import { UserRolesSchema } from '@/types/user';

import Quotation from '@/assets/icons/quotation.svg';
import Home from '@/assets/icons/home.svg';
import Policies from '@/assets/icons/policies.svg';
import Customer from '@/assets/icons/customer.svg';
import Quotes from '@/assets/icons/quotes.svg';
import Claims from '@/assets/icons/claims.svg';
import Help from '@/assets/icons/help.svg';
import Agent from '@/assets/icons/agent.svg';

const USER_NAVMAINITEMS = [
  {
    title: 'Policies',
    url: ROUTES.DASHBOARD.POLICIES('User'),
    icon: Policies.src,
  },
];

const AGENT_NAVMAINITEMS = [
  {
    title: 'Customer',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Customer.src,
    isActive: true,
    items: [
      {
        title: 'Policies',
        url: ROUTES.DASHBOARD.POLICIES('User'),
        icon: Policies.src,
      },
      {
        title: 'Quotes',
        url: ROUTES.DASHBOARD.QUOTES('User'),
        icon: Quotes.src,
      },
    ],
  },
  {
    title: 'Claims',
    url: '#',
    icon: Claims.src,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: Help.src,
  },
];

const SUPERUSER_NAVMAINITEMS = [
  {
    title: 'Agent',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Customer.src,
    isActive: true,
    items: [
      {
        title: 'Policies',
        url: ROUTES.DASHBOARD.POLICIES('Agent'),
        icon: Policies.src,
      },
      {
        title: 'Quotes',
        url: ROUTES.DASHBOARD.QUOTES('Agent'),
        icon: Quotes.src,
      },
    ],
  },
  {
    title: 'Customer',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Customer.src,
    isActive: true,
    items: [
      {
        title: 'Policies',
        url: ROUTES.DASHBOARD.POLICIES('User'),
        icon: Policies.src,
      },
      {
        title: 'Quotes',
        url: ROUTES.DASHBOARD.QUOTES('User'),
        icon: Quotes.src,
      },
    ],
  },
  {
    title: 'User Management',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Customer.src,
    isActive: true,
    items: [
      {
        title: 'Agent',
        url: ROUTES.DASHBOARD.POLICIES('Agent'),
        icon: Agent.src,
      },
      {
        title: 'Employees',
        url: '#',
        icon: Quotes.src,
      },
    ],
  },
  {
    title: 'Claims',
    url: '#',
    icon: Claims.src,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: Help.src,
  },
];

const ADMIN_NAVMAINITEMS = [
  {
    title: 'Customer',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Customer.src,
    isActive: true,
    items: [
      {
        title: 'Policies',
        url: ROUTES.DASHBOARD.POLICIES('User'),
        icon: Policies.src,
      },
      {
        title: 'Quotes',
        url: ROUTES.DASHBOARD.QUOTES('User'),
        icon: Quotes.src,
      },
    ],
  },
  {
    title: 'Claims',
    url: '#',
    icon: Claims.src,
  },
  {
    title: 'Get Help',
    url: '#',
    icon: Help.src,
  },
];

export const COMMON_NAVMAINITEMS = [
  {
    title: 'Home',
    url: ROUTES.DASHBOARD.ROOT,
    icon: Home.src,
  },
  {
    title: 'Quotation',
    url: ROUTES.DASHBOARD.QUOTATION.ROOT('coverage-selection'),
    icon: Quotation.src,
  },
];

export const FOOTER_NAVMAINITEMS = {
  title: 'Quotation',
  url: ROUTES.DASHBOARD.QUOTATION.ROOT('coverage-selection'),
  icon: Quotation.src,
};

export const NAVMAINITEMS = {
  superAdmin: [],
  [UserRolesSchema.Enum.User]: USER_NAVMAINITEMS,
  [UserRolesSchema.Enum.Agent]: AGENT_NAVMAINITEMS,
  [UserRolesSchema.Enum.SuperAdmin]: SUPERUSER_NAVMAINITEMS,
  [UserRolesSchema.Enum.Admin]: ADMIN_NAVMAINITEMS,
};

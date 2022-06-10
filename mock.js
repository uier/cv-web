const TAGS = {
  MANAGEMENT: 'management',
  SALES: 'sales',
  HUMAN_RESOURCES: 'humanResources',
  FINANCE: 'finance',
  MARKETING: 'marketing',
  OPERATIONS: 'operations',
  CUSTOMER_SERVICE: 'customerService',
}

const tasks = [
  {
    id: 1,
    description: 'Finalize the sales plan for new product marketing',
    tag: TAGS.MANAGEMENT,
    participant: 3,
    comment: 4,
    attachment: 2,
  },
  {
    id: 2,
    description: 'Run sales Training program for sales representatives',
    tag: TAGS.SALES,
    participant: 2,
    comment: 3,
    attachment: 1,
  },
  {
    id: 3,
    description: 'Hire New Operations & Facilities Manager',
    tag: TAGS.HUMAN_RESOURCES,
    participant: 1,
    comment: 2,
    attachment: 4,
  },
  {
    id: 4,
    description: 'Finalize end of quarter sales figures',
    tag: TAGS.FINANCE,
    participant: 3,
    comment: 1,
    attachment: 2,
  },
  {
    id: 5,
    description: 'Cost estimates for next year\'s marketing plan',
    tag: TAGS.MARKETING,
    participant: 1,
    comment: 4,
    attachment: 3,
  },
  {
    id: 6,
    description: 'Prepare end of year report for board of directors',
    tag: TAGS.MANAGEMENT,
    participant: 2,
    comment: 3,
    attachment: 2,
  },
  {
    id: 7,
    description: 'Finalize the sales plan for new product marketing',
    tag: TAGS.OPERATIONS,
    participant: 1,
    comment: 2,
    attachment: 1,
  },
  {
    id: 8,
    description: 'On-board new user from SkyNet Networks company',
    tag: TAGS.CUSTOMER_SERVICE,
    participant: 3,
    comment: 4,
    attachment: 3,
  },
  {
    id: 9,
    description: 'Finalize the monthly salaries statement fro sales man',
    tag: TAGS.FINANCE,
    participant: 2,
    comment: 2,
    attachment: 4,
  },
  {
    id: 10,
    description: 'Hire New Sales & Marketing Manager for main branch',
    tag: TAGS.HUMAN_RESOURCES,
    participant: 1,
    comment: 4,
    attachment: 2,
  },
  {
    id: 11,
    description: 'Secure lease On New Office Space For Expanded Team',
    tag: TAGS.OPERATIONS,
    participant: 1,
    comment: 3,
    attachment: 1,
  },
  {
    id: 12,
    description: 'Create Facebook Ad campaign for product launch',
    tag: TAGS.OPERATIONS,
    participant: 1,
    comment: 3,
    attachment: 1,
  },
];

const tagStyle = {
  [TAGS.MANAGEMENT]: {
    label: 'Management',
    classes: 'bg-blue-50 text-blue-500',
    borderClass: 'border-blue-500'
  },
  [TAGS.SALES]: {
    label: 'Sales',
    classes: 'bg-yellow-50 text-yellow-500',
    borderClass: 'border-yellow-400'
  },
  [TAGS.HUMAN_RESOURCES]: {
    label: 'Human Resources',
    classes: 'bg-orange-50 text-orange-400',
    borderClass: 'border-orange-400'
  },
  [TAGS.FINANCE]: {
    label: 'Finance',
    classes: 'bg-green-50 text-green-400',
    borderClass: 'border-green-400'
  },
  [TAGS.MARKETING]: {
    label: 'Marketing',
    classes: 'bg-purple-50 text-purple-400',
    borderClass: 'border-purple-400'
  },
  [TAGS.OPERATIONS]: {
    label: 'Operations',
    classes: 'bg-rose-50 text-rose-400',
    borderClass: 'border-rose-400',
  },
  [TAGS.CUSTOMER_SERVICE]: {
    label: 'Customer Service',
    classes: 'bg-violet-50 text-violet-400',
    borderClass: 'border-violet-400',
  },
};

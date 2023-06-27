import { HOME } from 'navigation/constants';
export const links = [
  {
    name: 'ACCOUNT',
    submenu: true,
    sublinks: [
      {
        sublink: [
          { name: 'Orders', link: HOME },
          { name: 'SavedItems', link: HOME },
        ],
      },
    ],
  },
];
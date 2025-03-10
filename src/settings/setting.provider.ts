import { Setting } from './setting.entity';

export const settingsProviders = [
  {
    provide: 'SETTINGS_REPOSITORY',
    useValue: Setting,
  },
];

import { toBeVisible } from '@testing-library/jest-native';
import { NativeModules } from 'react-native';

// Extend Jest matchers
expect.extend({ toBeVisible });

// Mock i18n for withTranslation
jest.mock('react-i18next', () => ({
    withTranslation: () => (Component) => (props) => (
      <Component {...props} t={(key) => key} /> // Mock t to return the key as a fallback
    ),
    initReactI18next: {
      type: '3rdParty',
      init: () => {}, // Mock the init method
    },
    useTranslation: () => ({
      t: (key) => key,
      i18n: {
        changeLanguage: jest.fn(),
      },
    }),
  }));

// Mock NativeModules for i18n or other native dependencies
NativeModules.RNI18n = {
  getConstants: () => ({
    locale: 'en',
  }),
};

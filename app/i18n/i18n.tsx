import I18n from 'i18n-js';

// Import all locales
import English from './locales/en.json';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = false;

// Define the supported translations
I18n.translations = {
    English
};

I18n.locale = 'English';

export default I18n;
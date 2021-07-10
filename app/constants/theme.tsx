
import { basicTheme, reddishTheme } from './colors';

const themes = {
    'basic': basicTheme,
    'reddish': reddishTheme,
};

const currentTheme = 'basic';

const colors = themes[currentTheme];

const fonts = {
    interRegular: "Inter-Regular"
}

export {
    colors,
    fonts
};
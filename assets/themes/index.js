import { Dimensions } from 'react-native';
import { DefaultTheme, configureFonts } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');

export const genColor = (opacity = 1) => ({
    primary: '#6E3FFB',
    secondary: '#EDE8FC',
    accent: '#EDE8FC',
    placeholder: '#B1B1B1',
    text: '#4D4D4D',
    textSecondary: '#242424',
    title: '#231F20',
    background: '#FFFFFF',
    white: '#FFFFFF',
    iconGray: '#757575',
    success: '#42ba96',
    red: '#FF4500',
    error: `rgba(186, 0, 13, ${opacity})`
});

const fontConfig = {
    default: {
        regular: {
            fontFamily: 'IBMPlexSans-Regular',
            fontWeight: 'normal'
        }
    }
};

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: genColor().primary,
        secondary: genColor().secondary,
        accent: genColor().accent,
        text: genColor().text,
        textSecondary: genColor().textSecondary,
        placeholder: genColor().placeholder,
        background: genColor().background,
        title: genColor().title,
        white: genColor().white,
        iconGray: genColor().iconGray,
        success: genColor().success,
        error: genColor().error,
        red: genColor().red
    },
    fonts: configureFonts(fontConfig),
    roundness: 5,
    dimensions: (percentile = 100) => ({
        width: (width * percentile) / 100,
        height: (height * percentile) / 100
    })
};

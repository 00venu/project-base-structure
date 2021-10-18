interface IBaseColors {
    White: string;
    Black: string;
    Purple: string;
    Blue: string;
    Teal: string;
    Orange: string;
    Error: string;
    Success: string;
    }
    export interface IColors extends IBaseColors {
    ViridianGreen: string;
    RaisinBlack: string;
    Cultured: string;
    LightSilver: string;
    ChineseBlack: string;
    PineTree: string;
    DarkCharcoal: string;
    CharlestonGreen: string;
    DavysGrey: string;
    Arsenic: string;
    BlueGreen: string;
    SonicSilver: string;
    Onyx: string;
    SpanishGray: string;
    }
    const baseColors = {
    White: '#FFFFFF',
    Black: '#000000',
    Purple: '#8E4396',
    Blue: '#0077C0',
    Teal: '#00B9B0',
    Orange: '#F68D15',
    Error: '#E04C12',
    Success: '#61A60E',
    };
    const themeColors = {
    ViridianGreen: '#008B98',
    RaisinBlack: '#1D1D24',
    Cultured: '#F5F5F5',
    };
    const textColors = {
    Cultured: '#F5F5F5',
    LightSilver: '#D8D8D8',
    };
    const backgroundColors = {
    RaisinBlack: '#1D1D24',
    ChineseBlack: '#141419',
    PineTree: '#26262D',
    DarkCharcoal: '#2E2E33',
    CharlestonGreen: '#292F2F',
    };
    const borderColors = {
    DavysGrey: '#5D5D5D',
    Arsenic: '#424242',
    DarkCharcoal: '#2E2E33',
    };
    const ctaColors = {
    ViridianGreen: '#008B98',
    BlueGreen: '#1996A2',
    SonicSilver: '#757575',
    Onyx: '333D3D',
    DavysGrey: '#5D5D5D',
    SpanishGray: '#979797',
    };
    export const colors: IColors = {
    ...baseColors,
    ...themeColors,
    ...textColors,
    ...backgroundColors,
    ...borderColors,
    ...ctaColors,
    };
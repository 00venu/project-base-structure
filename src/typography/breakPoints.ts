export interface IBreakpoints {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    }
    export interface ISizes {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
    }
    export const sizes = {
    xs: 640,
    sm: 768,
    md: 1024,
    lg: 1200,
    xl: 1400,
    xxl: 1920,
    };
    export const breakpoints = {
    xs: `min-width: ${sizes.xs}px`,
    sm: `min-width: ${sizes.sm}px`,
    md: `min-width: ${sizes.md}px`,
    lg: `min-width: ${sizes.lg}px`,
    xl: `min-width: ${sizes.xl}px`,
    xxl: `min-width: ${sizes.xxl}px`,
    };
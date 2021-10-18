import React from 'react';
import styled, { css } from 'styled-components';
import { colors, IColors } from './colors';
import { breakpoints } from './breakPoints';


export interface IVariant {
head1: string;
head2: string;
head3: string;
head4: string;
head5: string;
head6: string;
head7: string;
eyebrow: string;
label: string;
p1: string;
p2: string;
head2_strong: string;
head3_strong: string;
head4_strong: string;
head7_strong: string;
p1_strong: string;
p2_strong: string;
input_label: string;
}


type TFontWeights = 300 | 400 | 500 | 600 | 700;
export interface ITypography {
tag?: keyof JSX.IntrinsicElements;
variant: keyof IVariant;
align?: 'left' | 'right' | 'center' | 'justify';
color?: keyof IColors;
noWrap?: boolean;
isParagraph?: boolean;
children?: React.ReactNode;
weight?: TFontWeights;
className?: string;
}


const fontFamily = {
montserrat: "'Montserrat',sans-serif",
cavet: "'Caveat',cursive",
};


// Reusable Styles
const head2Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 26px;
font-weight: 300;
line-height: 34px;
letter-spacing: 0px;
@media (${breakpoints.lg}) {
font-size: 35px;
line-height: 50px;
}
`;


const head3Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 20px;
font-weight: 400;
line-height: 30px;
letter-spacing: -0.25px;
@media (${breakpoints.lg}) {
font-size: 24px;
line-height: 32px;
}
`;


const head4Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 16px;
font-weight: 400;
line-height: 28px;
letter-spacing: -0.25px;


@media (${breakpoints.lg}) {
font-size: 20px;
line-height: 32px;
}
`;


const head7Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 16px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0px;
`;


const p1Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
`;


const p2Styles = css`
font-family: ${fontFamily.montserrat};
font-size: 12px;
font-weight: 400;
line-height: 18px;
letter-spacing: 0px;
`;


const labelStyles = css`
font-family: ${fontFamily.montserrat};
font-size: 10px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
`;


export const variants = [
{
variant: 'head1',
style: css`
font-family: ${fontFamily.montserrat};
font-size: 20px;
font-weight: 600;
line-height: 28px;
letter-spacing: 0;
@media (${breakpoints.lg}) {
font-size: 28px;
line-height: 42px;
}
`,
tag: 'h1',
},


{
variant: 'head2',
style: head2Styles,
tag: 'h2',
},


{
variant: 'head2_strong',
style: css`
${head2Styles}
font-weight: 500;
`,
tag: 'h2',
},


{
variant: 'head3',
style: head3Styles,
tag: 'h3',
},


{
variant: 'head3_strong',
style: css`
${head3Styles}
font-weight: 600;
`,
tag: 'h3',
},


{
variant: 'head4',
style: head4Styles,
tag: 'h4',
},


{
variant: 'head4_strong',
style: css`
${head4Styles}
font-weight: 600;
`,
tag: 'h4',
},


{
variant: 'head5',
style: css`
font-family: ${fontFamily.montserrat};
font-size: 14px;
font-weight: 700;
line-height: 22px;
letter-spacing: 2px;
text-transform: uppercase;
`,
tag: 'h5',
},


{
variant: 'head6',
style: css`
font-family: ${fontFamily.montserrat};
font-size: 12px;
font-weight: 600;
line-height: 20px;
letter-spacing: 2px;
text-transform: uppercase;
`,
tag: 'h6',
},


{
variant: 'head7',
style: head7Styles,
tag: 'h6',
},
{
    variant: 'head7_strong',
    style: css`
    ${head7Styles}
    font-weight: 700;
    `,
    tag: 'h6',
    },
    
    
    {
    variant: 'eyebrow',
    style: css`
    font-family: ${fontFamily.cavet};
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    `,
    tag: 'h2',
    },
    
    
    {
    variant: 'label',
    style: css`
    ${labelStyles}
    text-transform: uppercase;
    `,
    tag: 'span',
    },
    
    
    {
    variant: 'input_label',
    style: labelStyles,
    tag: 'span',
    },
    
    
    {
    variant: 'p1',
    style: p1Styles,
    tag: 'p',
    },
    
    
    {
    variant: 'p1_strong',
    style: css`
    ${p1Styles}
    font-weight: 700;
    `,
    tag: 'p',
    },
    
    
    {
    variant: 'p2',
    style: p2Styles,
    tag: 'p',
    },
    
    
    {
    variant: 'p2_strong',
    style: css`
    ${p2Styles}
    font-weight: 600;
    `,
    tag: 'p',
    },
    ];
    
    
    const mapVariants = new Map();
    variants.map((item) => mapVariants.set(item.variant, item.style));
    
    
    const getVariants = (variant: string) => {
    if (mapVariants.has(variant)) return mapVariants.get(variant);
    return mapVariants.get('head1');
    };
    
    
    const mapTags = new Map();
    variants.map((item) => mapTags.set(item.variant, item.tag));
    
    
    const getTags = (variant: string) => {
    if (mapTags.has(variant)) return mapTags.get(variant);
    return mapTags.get('head1');
    };
    
    
    const Main = styled.div<{
    align?: string;
    variant: string;
    noWrap?: boolean;
    isParagraph?: boolean;
    myColor?: keyof IColors;
    getVariants: any;
    weight?: TFontWeights;
    }>`
    text-align: ${({ align }) => (align ? align : 'inherit')};
    color: ${({ myColor }) => (myColor ? colors[myColor] : 'inherit')};
    margin-bottom: ${({ isParagraph }) => (isParagraph ? '20px' : '0px')};
    ${({ noWrap }) =>
    noWrap &&
    css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    `}
    ${({ variant }) => variant && getVariants(variant)}
    ${({ weight }) =>
    weight &&
    css`
    font-weight: ${weight};
    `}
    `;
    
    
    export function Typography({
    tag,
    variant = 'head1',
    align = 'left',
    color,
    noWrap = false,
    isParagraph = false,
    children,
    weight,
    className,
    }: ITypography) {
    return (
    <Main
    isParagraph={isParagraph}
    as={tag ? tag : getTags(variant)}
    align={align}
    variant={variant}
    noWrap={noWrap}
    myColor={color}
    weight={weight}
    className={className}
    >
    {children}
    </Main>
    );
    }
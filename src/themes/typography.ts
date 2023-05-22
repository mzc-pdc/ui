import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        subtitle3: React.CSSProperties;
        body1Bold: React.CSSProperties;
        body1Regular: React.CSSProperties;
        body2Bold: React.CSSProperties;
        body2Regular: React.CSSProperties;
        body3: React.CSSProperties;
        body3Bold: React.CSSProperties;
        body3Regular: React.CSSProperties;
        body4: React.CSSProperties;
        body4Bold: React.CSSProperties;
        body4Regular: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        subtitle3?: React.CSSProperties;
        body1Bold: React.CSSProperties;
        body1Regular: React.CSSProperties;
        body2Bold: React.CSSProperties;
        body2Regular: React.CSSProperties;
        body3: React.CSSProperties;
        body3Bold: React.CSSProperties;
        body3Regular: React.CSSProperties;
        body4: React.CSSProperties;
        body4Bold: React.CSSProperties;
        body4Regular: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        subtitle3: true;
        body1Bold:true;
        body1Regular: true;
        body2Bold: true;
        body2Regular: true;
        body3: true;
        body3Bold: true;
        body3Regular: true;
        body4: true;
        body4Bold: true;
        body4Regular: true;
    }
}
export const typography = {
    fontFamily: `Noto Sans KR, -apple-system , Malgun Gothic, sans-serif , Apple SD Gothic Neo`,
    h1: {
        fontWeight: 'bold',
        fontSize: `1.75rem`,
    },
    h2: {
        fontWeight: 'bold',
        fontSize: `1.5rem`,
    },
    h3: {
        fontWeight: 'bold',
        fontSize: `1.25rem`,
    },
    subtitle1: {
        fontWeight: 'bold',
        fontSize: `1.125rem`,
    },
    subtitle2: {
        fontWeight: 'bold',
        fontSize: `1rem`,
    },
    subtitle3: {
        fontWeight: 'bold',
        fontSize: `0.938rem`,
    },
    body1: {
        fontWeight: '500',
        fontSize: `0.875rem`,
    },
    body1Bold: {
        fontWeight: 'bold',
        fontSize: `0.875rem`,
    },
    body1Regular: {
        fontWeight: 'normal',
        fontSize: `0.875rem`,
    },
    body2: {
        fontWeight: '500',
        fontSize: `0.813rem`,
    },
    body2Bold: {
        fontWeight: 'bold',
        fontSize: `0.813rem`,
    },
    body2Regular: {
        fontWeight: 'normal',
        fontSize: `0.813rem`,
    },
    body3: {
        fontWeight: '500',
        fontSize: `0.75rem`,
    },
    body3Bold: {
        fontWeight: 'bold',
        fontSize: `0.75rem`,
    },
    body3Regular: {
        fontWeight: 'normal',
        fontSize: `0.75rem`,
    },
    body4: {
        fontWeight: '500',
        fontSize: `0.688rem`,
    },
    body4Bold: {
        fontWeight: 'bold',
        fontSize: `0.688rem`,
    },
    body4Regular: {
        fontWeight: 'normal',
        fontSize: `0.688rem`,
    },
}
const theme = {
    bg: '#0a0a0a',
    bgAlt: '#0f0f0f',
    surface: '#171717',
    surfaceLight: '#1e1e1e',
    surfaceHover: '#222222',

    primary: '#a855f7',
    primaryMuted: '#7c3aed',
    primaryGlow: 'rgba(168, 85, 247, 0.15)',
    primaryGlowStrong: 'rgba(168, 85, 247, 0.25)',

    secondary: '#c084fc',

    textPrimary: '#ffffff',
    textBody: '#e0e0e0',
    textMuted: '#a0a0a0',
    textDim: '#6b6b6b',

    border: 'rgba(255, 255, 255, 0.06)',
    borderLight: 'rgba(255, 255, 255, 0.1)',
    borderHover: 'rgba(168, 85, 247, 0.3)',

    shadowCard: '0 4px 24px rgba(0, 0, 0, 0.3)',
    shadowCardHover: '0 20px 40px rgba(0, 0, 0, 0.5)',
    shadowGlow: '0 0 20px rgba(168, 85, 247, 0.2)',

    fontHeading: "'Outfit', sans-serif",
    fontBody: "'Inter', sans-serif",
    fontMono: "'Fira Code', 'JetBrains Mono', monospace",

    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    transitionFast: 'all 0.15s ease',
    transitionSlow: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',

    sectionPadding: '6rem 10%',
    navHeight: '70px',

    radiusSm: '6px',
    radiusMd: '10px',
    radiusLg: '15px',
    radiusXl: '20px',
    radiusFull: '9999px',

    breakpoints: {
        mobile: '480px',
        tablet: '768px',
        desktop: '900px',
        wide: '1200px',
    },

    gradientHeading: 'linear-gradient(to right, #ffffff, #a5a5a5)',
    gradientPrimary: 'linear-gradient(135deg, #a855f7, #c084fc)',
    gradientDark: 'linear-gradient(180deg, #0a0a0a 0%, #111111 100%)',
};

export default theme;

/**
 * Creates column percentages based on column count
 */
const createColumns = columnCount => {
  let columns = {};
  for (let i = 1; i <= columnCount; i++) {
    columns[i] = (i / columnCount) * 100 + "%";
  }
  return columns;
};

const grid = {
  columnCount: 16,
  columns: createColumns(16)
};

// Define bold vs 700pt
const weight = {
  bold: "bold",
  normal: "normal"
};

const border = {
  color: "rgba(34, 36, 38, 0.15)",
  strong: "rgba(34, 36, 38, 0.22)",
  internal: "rgba(34, 36, 38, 0.1)",
  selected: "rgba(34, 36, 38, 0.35)",
  strongSelected: "rgba(34, 36, 38, 0.5)",
  disabled: "rgba(34, 36, 38, 0.5)",

  solidInternal: "#FAFAFA",
  solidBorder: "#D4D4D5",
  solidSelected: "#BCBDBD"
};

const colors = {
  offBlack: "#111",
  fullBlack: "#000000",
  offWhite: "#F9FAFB",
  darkWhite: "#F3F4F5",
  midWhite: "#DCDDDE",
  white: "#FFFFFF",

  red: "#DB2828",
  orange: "#F2711C",
  yellow: "#FBBD08",
  olive: "#B5CC18",
  green: "#21BA45",
  teal: "#00B5AD",
  blue: "#2185D0",
  violet: "#6435C9",
  purple: "#A333C8",
  pink: "#E03997",
  brown: "#A5673F",
  grey: "#767676",

  primary: "#CC2029",
  secondary: "purple",
  positive: {
    color: "green",
    background: "#FFF6F6",
    border: "#A3C293",
    header: "#1A531B",
    text: "#2C662D"
  },
  negative: {
    color: "red",
    background: "#FFF6F6",
    border: "#E0B4B4",
    header: "#912D2B",
    text: "#9F3A38"
  },
  info: {
    color: "#31CCEC",
    background: "#F8FFFF",
    border: "#A9D5DE",
    header: "#0E566C",
    text: "#276F86"
  },
  warning: {
    color: "#F2C037",
    background: "#C9BA9B",
    border: "#FFFAF3",
    header: "#794B02",
    text: "#573A08"
  },

  brand: {
    facebook: "#3B5998",
    twitter: "#55ACEE",
    googleplus: "#DD4B39",
    linkedin: "#1F88BE",
    youtube: "#FF0000",
    pinterest: "#BD081C",
    instagram: "#49769C"
  }
};

const sizes = {
  mini: 11 / 14,
  tiny: 12 / 14,
  small: 13 / 14,
  medium: 14 / 14,
  large: 16 / 14,
  big: 18 / 14,
  huge: 20 / 14,
  massive: 24 / 14
};

const page = {
  background: colors.white,
  lineHeight: "1.4285em"
};

const theme = {
  background: "#000",
  borderColor: "#BF67AD",
  typography: {
    // Color of default text
    color: colors.offBlack,
    fonts: {
      header: `"Heebo", Arial, Helvetica, sans-serif`,
      page: `"Heebo", Arial, Helvetica, sans-serif`
    },
    // The font sizes
    size: {
      // Controls all em references
      em: "14px",
      // Base page font
      page: "14px"
    },

    heading: {
      weight: weight.bold,
      lineHeight: "1.5em",

      h1: 28 / 14 + "rem",
      h2: 24 / 14 + "rem",
      h3: 18 / 14 + "rem",
      h4: 15 / 14 + "rem",
      h5: 14 / 14 + "rem"
    },

    paragraph: {
      margin: "0em 0em 1em",
      lineHeight: page.lineHeight
    }
  },
  borderRadius: "4px",

  links: {
    color: colors.primary,
    underline: "none",
    hoverColor: colors.primary
  },

  // Form input
  input: {
    background: colors.white,
    color: colors.offBlack,
    placeholderColor: "#222",
    placeholderFocusColor: "#333",

    verticalPadding: "11px",
    horizontalPadding: "14px",
    inputPadding: "11px 14px",
    lineHeight: 17 / 14 + "em",

    focused: {
      borderColor: "#85B7D9",
      mutedBorderColor: "#96C8DA"
    }
  },

  // Grid
  columnCount: 16,

  // Animation
  animation: {
    duration: "400ms",
    easing: "ease"
  },

  // Breakpoints
  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    computer: "992px",
    desktop: "1200px",
    widescreen: "1920px"
  },

  icons: {
    width: "1.18em"
  },

  // Shadows
  shadows: {
    subtle: `0px 1px 2px 0 ${border.color}`,
    floatingShadow: `
  0px 2px 4px 0px rgba(34, 36, 38, 0.12),
  0px 2px 10px 0px rgba(34, 36, 38, 0.15)
  `,
    floatingShadowHover: `
  0px 2px 4px 0px rgba(34, 36, 38, 0.15),
  0px 2px 10px 0px rgba(34, 36, 38, 0.25)
    `
  },

  // Import any external objects for easy access
  colors,
  weight,
  sizes,
  border,
  page,
  grid
};

export default theme;

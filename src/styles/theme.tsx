import { colors } from "./colors";

export const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    normal: 1,
    title: 1.25,
    paragraph: 1.5,
  },
  letterSpacings: {
    normal: "normal",
  },
  colors: {
    ...colors,
  },
};

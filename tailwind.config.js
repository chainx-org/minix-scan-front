const { boxShadow } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    colors: {
      gray: {
        lightest: '#C2C2C2',
        lighter: '#F3F5F9',
        light: "#f5f5f5",
        dark: "#F8F9FA",
      },
      blue: {
        light: "#4572DE",
      },
      black: {
        light: "#777777",
        dark: "#504862",
        darker: "#272233",
      },
      white: {
        light: "#ffffff",
        dark: "#fbfafc",
      },
      topBar: {
        black: "#2F2F2F",
      },
      textColor: {
        gray: " #504862;",
      },
    },
    fontFamily: {
      display: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    fontSize: {
      xs: ".75rem",
      xms: ".8125rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      title: "2rem",
    },

    borderColor: (theme) => ({
      ...theme("colors"),
      default: "#EFEFEF",
      transparent: "transparent",
      card: "#EAECF7",
      listItem: "#EAECF7",
      lang: "#DEDEDE",
      vote: "#272233",
      pledge: "#DADADA",
    }),
    borderRadius: {
      lg: ".5rem",
      xl: ".75rem",
      "2xl": "1rem",
      circle: "50%",
      rounded: ".25rem",
      card: ".125rem",
    },
    customForms: (theme) => ({
      default: {
        input: {
          backgroundColor: theme("colors.gray.900"),
          "&::placeholder": {
            color: theme("colors.gray.500"),
            opacity: "1",
          },
          "&:focus": {
            outline: "none",
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.orange.500"),
          },
        },
      },
    }),
    extend: {
      boxShadow: {
        ...boxShadow,
        outline: "0 0 0 3px rgba(239, 121, 48, 0.5)",
        card: "0px 1px 6px 0px rgba(0, 0, 0, 0.05)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        listItem: "1.5fr 8.5fr",
        card: '2fr 1fr'
      },
      margin: {
        auto: "auto",
        1: ".25rem",
        1.5: ".375rem",
        2: ".5rem",
        2.5: ".625rem",
        3: ".75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        7.5: "1.875rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        22.5: "5.625rem",
        "22-": "-5.625rem",
        "24-": "-6rem",
      },
      fontFamily: {
        WorkSans: ["WorkSans-Regular"],
        WorkSansRegular: ["WorkSans-Regular_Bold"],
        PingFangSC: ["PingFangSC-Regular"],
        PingFang: ["PingFangSC-Semibold"],
      },
      inset: {
        168: "68%",
        17: "4.375rem",
        13: "3.125rem",
        10: "2.5rem",
        7: "1.75rem",
        158: "58%",
        16: "16rem",
      },
      padding: {
        0.5: "0.125rem",
        1: "0.25rem",
        1.2: "0.3125rem",
        1.5: ".375rem",
        2: "0.5rem",
        2.25: "0.5625rem",
        2.5: ".625rem",
        3: ".75rem",
        3.5: ".875rem",
        4: "1rem",
        4.5: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        6.5: "1.625rem",
        7: "1.75rem",
        7.5: "1.75rem",
        8: '2rem',
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        15: "3.75rem",
        17.75: "4.4375rem",
        20: "5rem",
        25: "5.75rem",
        28: "7rem",
        30: "6.625rem",
        40: "12.3125rem",
        50: "29.75rem",
      },
      width: {
        fitContent: "fit-content",
        overSpread: "100%",
        6: "1.5rem",
        7: "1.75rem",
        12: "3rem",
        14: "3.5rem",
        18: "4.5rem",
        20: "5rem",
        21.25: "21.25rem",
        24.5: "6.125rem",
        28: "7rem",
        30: "7.5rem",
        35: "8.875rem",
        37: "9.375rem",
        37.5: "9.375rem",
        38: "9.5rem",
        46: "11.5rem",
        47: "11.75rem",
        57: "14.25rem",
        58: "14.875rem",
        50: "50rem",
        52.5: "52.5rem",
        60: "15rem",
        70: "17.5rem",
        73.75: "18.4375rem",
        90: "22rem",
        100: "29.5rem",
        130: "33.75rem",
        150: "36.25rem",
        152.5: "38.125rem",
        // "7/10": "70%",
        223: "13.93rem",
      },
      height: {
        fitContent: "fit-content",
        overSpread: "100%",
        0.5: "0.125rem",
        2: "0.5rem",
        2.5: ".625rem",
        3: ".75rem",
        5: "1.25rem",
        6: "1.5rem",
        6.5: "1.625rem",
        7: "1.75rem",
        7.5: "1.875rem",
        9: "2.25rem",
        9.5: "2.375rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.125rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5625rem",
        20: "5rem",
        22: "5.5rem",
        32: "8rem",
        40: "10.18rem",
        54: "13.5rem",
        57: "14.25rem",
        58: "14.5rem",
        62: "15.5rem",
        72.25: "18.0625rem",
        78.5: "19.625rem",
        80: "20rem",
        101.75: "25.4375rem",
        105: '26.625rem',
        140: "34.25rem",
        150: "35rem",
        175: "39.75rem",
      },
      minWidth: {
        37.5: "9.375rem",
        40: "10rem",
        56: "14rem",
        73.5: "18.4375rem",
        210: "52.5rem",
        150: "38.125rem",
      },
      minHeight: {
        26: "6.5rem",
        55: "13.75rem",
        238: "59.5rem",
      },
      maxHeight: {
        66: "16.5rem",
      },
      lineHeight: {
        9.5: "2.375rem",
        12: "3rem",
        20: "1.25rem",
        22: "1.375rem",
        25: "1.5rem",
      },
      display: {
        flex: "flex",
        direction: {
          row: "row",
          column: "column",
        },
      },
      backgroundImage: (theme) => ({
        indexBg: "url('./src/assets/background.png')",
      }),
    },
  },
  variants: {
    borderWidth: ["last"],
  },
  plugins: [require("@tailwindcss/custom-forms")],
};

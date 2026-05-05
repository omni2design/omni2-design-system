module.exports= {
  content: [
"./app/**/*.{js,ts,jsx,tsx}",
"./components/**/*.{js,ts,jsx,tsx}",
"./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
0:"#ffffff",
50:"#f8f8f8",
100:"#e8e8e8",
400:"#999999",
500:"#707476",
900:"#1e1e1e",
950:"#0e0e0e",
1000:"#000000"
        },
        primary: {
50:"#f3fcfb",
100:"#eaf9f7",
200:"#d4eeea",
300:"#b1e6de",
400:"#77cabe",
500:"#0edbbd",
700:"#055951",
800:"#002d29",
900:"#041412"
        },
        background: {
          default:"#ffffff",
          subtle:"#f8f8f8",
          inverse:"#041412",
          elevated:"#ffffff"
        },
        text: {
          primary:"#0e0e0e",
          secondary:"#707476",
          muted:"#999999",
          inverse:"#ffffff",
          brand:"#0edbbd"
        },
        border: {
          default:"#e8e8e8",
          subtle:"#ffffff1f",
          strong:"#1e1e1e",
          focus:"#0edbbd"
        }
      },
      fontFamily: {
        sans: ["Inter","sans-serif"],
        display: ["Chillax","Inter","sans-serif"]
      },
      borderRadius: {
        sm:"8px",
        md:"12px",
        lg:"16px",
        xl:"24px",
        full:"999px"
      },
      spacing: {
18:"72px",
22:"88px",
26:"104px",
30:"120px"
      }
    }
  },
  plugins: []
};

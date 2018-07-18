
// Main theming -- https://www.colourhunt.com/palette/cjg0ue34wlmsv01674xs9cnk7
// Gives our website a mild blue/grey/white theme
// Later on we can possibly add theming for times of the year so obviously the provided colors below are for summer/spring

// Switched to using styled-components-theme library to handle theming. rgb wasn't a recognized definition. Now we will add a ThemeProvider to our index.js to handle the theming from here
const colors = {
    grey: '#E8E8E8',
    blue: '#08AFF5',
    darkgrey: '#3C3D4F',
    lightblue: '#0AB8FF',
    white: '#FFF',
    black: '#000000',
    maroon: '#800000',
    navy: '#00005A'
};

export default colors;
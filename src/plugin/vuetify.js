import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#11A634',
        secondary: '#3A4832',
      },
      dark: {
        primary: '#11A634',
        secondary: '#3A4832',
      },
    },
  },
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
});

import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

// Create VueI18n instance with options
export const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: {
      // set locale messages
      ja : require('./lang/ja.json'),
      en : require('./lang/en.json'),
      cn : require('./lang/cn.json'),
      tw : require('./lang/tw.json'),
      kr : require('./lang/kr.json'),
    },
   })
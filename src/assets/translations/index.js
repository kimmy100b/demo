import Vue from 'vue';
import VueI18n from 'vue-i18n';
import languages from './languages.js';

Vue.use(VueI18n);

const messages = Object.assign(languages);

const i18n = new VueI18n({
    locale: 'ko',
    messages
});

export default i18n;
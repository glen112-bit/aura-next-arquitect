module.exports = {
   "env": {
    "jest/globals": true
  },
  "extends": [
    "eslint:recommended",
    "next",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "next/core-web-vitals",
  ],
  "rules": {
    "@next/next/react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "@next/next/no-html-link-for-pages":"off"
  }
 
};

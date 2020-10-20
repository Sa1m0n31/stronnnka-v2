/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path");

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `img`,
        path: path.join(__dirname, 'static', `img`)
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-180770046-1'
      }
    },
   'gatsby-plugin-react-helmet',
  'gatsby-plugin-sass']
};

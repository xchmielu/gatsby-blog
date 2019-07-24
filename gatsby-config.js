/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Chmielewski.dev",
    description: "Blog developera, który pokazuję jak przyjemne jest kodzenie, oraz pokazuję jak podejść do analityki na swoim serwisie.",
    image: "",
    url: "chmielewski.dev"

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark`},
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `localhost:8080`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
        
    //   }}
  ],
}
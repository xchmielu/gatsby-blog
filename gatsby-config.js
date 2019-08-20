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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // { resolve: `gatsby-transformer-remark`},
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chmielewski.dev`,
        short_name: `Chmielewski`,
        start_url: `/`,
        background_color: `#fffff`,
        theme_color: `#fffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-vscode`,
          // All options are optional. Defaults shown here.
          options: {
            colorTheme: 'Solarized Dark', // Read on for list of included themes. Also accepts object and function forms.
            wrapperClassName: '',   // Additional class put on 'pre' tag
            injectStyles: true,     // Injects (minimal) additional CSS for layout and scrolling
            // extensions: [],         // Extensions to download from the marketplace to provide more languages and themes
            // languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
            // replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
            // getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
            //   content,              //   - the string content of the line
            //   index,                //   - the zero-based index of the line within the code fence
            //   language,             //   - the language specified for the code fence
            //   codeFenceOptions      //   - any options set on the code fence alongside the language (more on this later)
            // }) => '',
            // extensionDataDirectory: // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
            //   path.resolve('extensions'),
            // logLevel: 'error'       // Set to 'warn' to debug if something looks wrong
          }
        }]
      }
    }

    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `localhost:8080`,
    //     protocol: `http`,
    //     hostingWPCOM: false,
        
    //   }}
  ],
}
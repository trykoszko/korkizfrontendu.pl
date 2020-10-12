module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T3LKSG8",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Korki z Front-endu`,
        short_name: `KzF-E`,
        start_url: `/`,
        background_color: `#EFDED6`,
        theme_color: `#ff825c`,
        display: `standalone`
      },
    }
  ],
}

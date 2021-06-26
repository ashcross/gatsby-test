module.exports = {
  siteMetadata: {
    title: "Gatsby Website Test",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", //Needed for dyanimc shapes
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: `blog`,
        path: `${__dirname}/blog`
      }
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: `Is Gunna in Jail`,
    siteUrl: `https://www.isgunnainjail.com`
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-FFX08H04JW"
    }
  },
  "gatsby-plugin-react-helmet",
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/images/gunna-alt.png',
    }
  },
  ]
  };

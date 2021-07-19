/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    plugins: [
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-brands-svg-icons",
        "@fortawesome/free-regular-svg-icons",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/react-fontawesome",
        "gatsby-plugin-sass",
        "react-pdf",
        "react-bootstrap",
        "react-dom",
        "sass",
        "canvas",
        "emailjs-com",
        "dotenv",
        "@apollo/client",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
        {
            resolve: 'gatsby-plugin-apollo',
            options: {
                uri: process.env.GATSBY_HASURA_GRAPHQL_URL
            }
        }
    ],
}

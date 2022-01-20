const {
  mdiHome,
  mdiInformation,
  mdiTeamviewer,
  mdiServer,
  mdiAirplane,mdiTelevision,mdiSailBoat,
} = require('@mdi/js')
module.exports = {
  siteMetadata: {
    title: 'LCOT Gatsby Site',
    nav: [
      {
        title: 'Home',
        path: '/',
        icon: mdiHome,
      },
      {
        title: 'About us',
        path: '/about',
        icon: mdiInformation,
        children: [
          {
            title: 'Our service',
            path: '/about/service',
            icon: mdiServer,
          },
          {
            title: 'Our team',
            path: '/about/team',
            icon: mdiTeamviewer,
          },
        ],
      },
      {
        title: 'Course on tours',
        path: '/curse',
        icon: mdiAirplane,
        children: [
          {
            title: 'Online class',
            path: '/curse/online',
            icon: mdiTelevision,
          },
          {
            title: 'Offline class',
            path: '/curse/offline',
            icon: mdiSailBoat,
          },
        ],
      },
    ],
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-transition-link',
      // options: {
      //   layout: require.resolve(`./src/components/Layout.js`),
      // },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/src/` },
    },
    {
      resolve: `gatsby-plugin-windicss`,
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
        preflight: true,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

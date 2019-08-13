const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Marcos Souza - blog pessoal", // <title>
  shortSiteTitle: "Blog Pessoal", // <title> ending for posts and pages
  siteDescription: "Blog Pessoal.",
  siteUrl: "https://www.marcosouza.com.br/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Marcos Souza",
  authorTwitterAccount: "mrcsStark",
  // info
  infoTitle: "Marcos Souza",
  infoTitleNote: "blog pessoal",
  // manifest.json
  manifestName: "Marcos Souza - blog Pessoal",
  manifestShortName: "Blog Pessoal", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "john@doe.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/marcostark" },
    { name: "twitter", url: "https://twitter.com/mrcsStark" },
    { name: "facebook", url: "https://facebook.com/mrcsStark" }
  ]
};

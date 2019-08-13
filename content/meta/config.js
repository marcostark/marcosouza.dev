const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog starter for GatsbyJS", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://www.marcosouza.com.br/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Marcos Souza",
  authorTwitterAccount: "mrcsStark",
  // info
  infoTitle: "Marcos Souza",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
  {
    sanityContributor {
      name
      photo {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`);
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
  createPage({
    path: '/using-hydration',
    component: require.resolve("./src/templates/using-hydration.js"),
    context: {
      imageData: data.sanityContributor.photo.asset.gatsbyImageData
    },
    defer: true,
  })
}

import { gql } from "@apollo/react-hooks"

const GQLData = gql`
query {
    mainpages {
      data {
        attributes {
          title
          slug
          content
          FeaturedImage {
            data {
              attributes {
                url
                formats
              }
            }
          }
          pages {
            data {
              attributes {
                title
                slug
                content
                FeaturedImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                subpages {
                  data {
                    attributes {
                      title
                      slug
                      content
                      FeaturedImage {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      subsubpages {
                        data {
                          attributes {
                            title
                            slug
                            content
                            FeaturedImage {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`

export default GQLData
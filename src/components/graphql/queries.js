import {gql} from '@apollo/client'

const GET=gql`
query{
  posts {
    author {
      name
      avatar {
        url
      }
    }
    title
    slug
    id
    coverPhoto {
      url
    }
  }
}
`


const GET_AUTHORS= gql`
 query {
  authors {
    avatar {
      url
    }
    name
    id
    slug
  }
}
`

export {GET, GET_AUTHORS};

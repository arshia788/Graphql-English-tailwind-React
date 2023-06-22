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

export {GET};

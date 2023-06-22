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

const GET_AUTHOR_INFO=gql`
 query getAuthorInfo($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
`

export {GET, GET_AUTHORS, GET_AUTHOR_INFO};

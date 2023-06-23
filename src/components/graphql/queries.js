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
    name
    field
    avatar {
      url
    }
    slug
    id
    description {
      html
    }
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

const GET_POST_INFO= gql`
query getPost ($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      id
      slug
      field
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    title
  }
}
`

export {GET, GET_AUTHORS, GET_AUTHOR_INFO,GET_POST_INFO};

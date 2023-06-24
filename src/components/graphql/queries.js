import {gql} from '@apollo/client'

const GET=gql`
query{
  posts {
    comments {
      name
      id
    }
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
      comments{
        name
        id
      }
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

const GET_POST_COMMENTS= gql`
query getPostComment($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    name
    id
    text
  }
}
`

export {GET, GET_AUTHORS, GET_AUTHOR_INFO,GET_POST_INFO, GET_POST_COMMENTS};

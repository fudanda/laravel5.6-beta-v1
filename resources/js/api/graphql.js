import gql from 'graphql-tag'

export const ALL_POSTS_QUERY = gql `
query AllPostsQuery {
    allPosts {
        id
        title
        slug
        user {
            name
        }
    }
}
`

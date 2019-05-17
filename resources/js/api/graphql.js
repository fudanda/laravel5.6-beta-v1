import gql from 'graphql-tag'

import gql from 'graphql-tag'  //引入graphql
export default apollo = {
    article: gql`query APIQuery{  //如果类型后面带！表示该参数必填
    article{
     article_id
    }
  }`
}

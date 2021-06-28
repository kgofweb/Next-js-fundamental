import { server } from '../config'

import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  // console.log(articles);
  return (
    <div>
      <Head>
        <title>Learn Next JS</title>
        <meta name="keywords" content='web development'/>
      </Head>

      <ArticleList articles={articles} />
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/article`);
  const articles = await response.json();

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await response.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }
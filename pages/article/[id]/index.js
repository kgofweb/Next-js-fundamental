import { server } from '../../../config'

// import Head from 'next/head'
import Link from 'next/link'
import Meta from '../../../components/Meta'
// import {useRouter} from 'next/router'

const article = ({ article }) => {
  // const router = useRouter();
  // const {id} =  router.query;

  return (
    <>
      {/* <Head>
        <title>Article</title>
      </Head> */}

      <Meta title={article.title} />

      <h3> {article.title} </h3>
      {/* <p> {article.body} </p> */}
      <p> {article.body} </p>
      <br/>
      <Link href="/">
        Go back
      </Link>
      <br/>

      This is an article {article.id}
    </>
  )
}

// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// ============= WITH JSONPLACEHOLDER ====================== //

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const article = await res.json();

//   const ids = article.map(articles => articles.id);

//   const paths = ids.map(id => ({
//     params: {id: id.toString()}
//   }));

//   return {
//     paths,
//     fallback: false
//   }
// }



// =============== WITH DATA FETCH ==================== //

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/article/${context.params.id}`)
  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/article`);

  const article = await res.json();

  const ids = article.map(articles => articles.id);

  const paths = ids.map(id => ({
    params: {id: id.toString()}
  }));

  return {
    paths,
    fallback: false
  }
}

export default article

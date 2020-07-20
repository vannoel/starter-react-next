import Head from 'next/head'
import { FontAwesomeIcon as FAI } from '@fortawesome/react-fontawesome';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {'Hello World!'}
        <FAI icon={['fas', 'external-link-alt']} fixedWidth />
      </main>
    </div>
  )
}

// export async function getStaticPaths() {
//   // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
//   return {
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

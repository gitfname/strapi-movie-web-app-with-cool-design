import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef4444" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className='dark bg-[#1E1E1E]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

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
        <div id="application-page-transition-loading-screen" className="group transition-opacity duration-300 opacity-100 fixed top-0 left-0 w-full h-full z-[9999] bg-black/75 backdrop-blur-sm grid place-items-center show-page-transition-loading">
          <div className='w-10 h-10 rounded-full border-t border-t-white group-[&.show-page-transition-loading]:animate-spin'></div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

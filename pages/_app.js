// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// //icons
// import "primeicons/primeicons.css";

import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

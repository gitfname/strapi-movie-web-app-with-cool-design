// import "primereact/resources/themes/lara-light-indigo/theme.css";
// //core
// import "primereact/resources/primereact.min.css";
// //icons
// import "primeicons/primeicons.css";

import { useEffect } from "react"
import { useRouter } from "next/router"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(
    () => {
      document.getElementById("application-page-transition-loading-screen").classList.replace("show-page-transition-loading", "hide-page-transition-loading")
      router.events.on("routeChangeStart", () => {
        document.getElementById("application-page-transition-loading-screen").classList.replace("hide-page-transition-loading", "show-page-transition-loading")
      })
      router.events.on("routeChangeComplete", () => {
        document.getElementById("application-page-transition-loading-screen").classList.replace("show-page-transition-loading", "hide-page-transition-loading")
      })
    },
    []
  )

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

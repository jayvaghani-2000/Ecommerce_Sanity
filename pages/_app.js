import '../styles/globals.css'
import Layout from '../components/Layout'
import React from 'react'
import { StateContext } from "./../Context/StateContext"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp

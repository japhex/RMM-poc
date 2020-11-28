import React from 'react'
import { Helmet } from 'react-helmet'
import App from 'next/app'
import Header from 'components/global/header'
import Footer from 'components/global/footer'
import styles from 'styles/app.module.css'
import layoutStyles from 'styles/layout.module.css'
import Navigation from 'components/global/navigation'
import 'styles/globals.css'

class RMM extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Helmet>
          <title>RMM</title>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Helmet>
        <Header />
        <div className={styles.mainLayout}>
          <Navigation />
          <div className={layoutStyles.baseContainer}>
            <Component {...pageProps} />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default RMM

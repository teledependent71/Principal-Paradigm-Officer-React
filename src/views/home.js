import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Paradigm Officer</title>
        <meta property="og:title" content="Principal Paradigm Officer" />
      </Helmet>
    </div>
  )
}

export default Home

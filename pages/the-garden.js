import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Navbar } from '../components/Navbar/Navbar'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { BlogGrid } from '../components/TheGarden/BlogGrid/BlogGrid'

const TheGarden = () => {

  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <BlogGrid />
    </>
  )
}

export default TheGarden
import type { NextPage } from 'next'

import Layout from 'components/Layout'
import MainCard from 'components/MainCard'
import ROUTES from 'utils/constants/routes'
import Characters from 'pages/characters'
import Episodes from './episodes'
import Locations from './locations'

const TITLE = 'Rick and Morty'

const Home: NextPage = () => {
  return (
    <>
    <div>
    <Locations/>
            <Episodes/>
            <Characters />
    </div>


    </>
  )
}

export default Home

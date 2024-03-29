import { NextPage } from 'next'
import Image from 'next/image'

import Layout from 'components/Layout'

const NotFount: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <span className="text-gray-100 text-6xl font-bold italic text-shadow  font-balsamiq">
          404!
        </span>
        <div className="relative h-80 w-80 rounded-full  ">
          <Image src="/images/pngeggss.png" alt="Not Found" layout="fill" />
        </div>
        <span className="text-gray-100 text-4xl text-shadow italic font-comfortaa">
          {"I'm a krugger  !"}
        </span>
        <span className="text-gray-100 text-2xl font-comfortaa font-bold">
          {"this page doesn't exist"}
        </span>
      </div>
    </Layout>
  )
}

export default NotFount

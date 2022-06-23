import Head from "next/head"
import Header from "../components/Header"
import Description from "../components/Description"
import DogList from "../components/DogList"

export default function Home() {
  return (
    <>
      <Head>
        <title>ワンだ！ランド</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className="w-full h-screen">
        <Header />
        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col ">
            <Description />
          </div>
          <div className="w-1/2">
            <DogList />
          </div>
        </div>
      </div>
    </>
  )
}

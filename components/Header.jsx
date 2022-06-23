import Image from "next/image"

export default function Header() {
  return(
    <>
      <div className="flex bg-blue-300">
        <div className="flex flex-row items-center ml-8 py-2">
          <Image src="/icon.png" width={60} height={60}/>
          <div className="flex flex-col ml-6">
            <p className="text-blue-500 text-2xl font-semibold">ワンだ！ランド</p>
            <span className="text-xs text-white">犬好きによる犬好きのための癒しアプリ</span>
          </div>
        </div>
      </div>
    </>
  )
}
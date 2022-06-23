import { useState } from "react"
import { DogImage } from "./DogImage"

export default function Description() {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/chow/n02112137_9280.jpg',
  );

  const changeImg = () => {
    fetch('https://dog.ceo/api/breeds/image/random', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        if (data.status == 'success') {
          const dogUrl = data.message;
          setDogUrl(dogUrl);
        }
      })
  }

  return (
    <>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-blue-600">ランダムワン！</h2>
      </div>
      <div className="text-center">
        <p className="text-sm">「変更」ボタンをクリックして、犬さんのかわいいお写真がランダムに出てくるよ！</p>  
      </div>

      <div className="text-center mt-4">
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full"
        onClick={changeImg}>
          変更
        </button>
      </div>

      <div className="flex justify-center my-6 w-4/5 mx-auto">
        <DogImage url={dogUrl} />
      </div>
    </>
  )
}
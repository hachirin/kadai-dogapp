import { useState, useEffect } from 'react'
import { DogImage } from "./DogImage"
import { BreedsSelect } from './BreedsSelect'

export default function DogList() {
  const [breeds,setBreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState("");
  const [dogImageList,setDogImageList] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        setBreeds(Object.keys(data.message));
      }
    })
  },[])

  const getDogImage = (() => {
    if(selectedBreed === "") {
      setDogImageList([]);
      return;
    }
    const imageUrl = `https://dog.ceo/api/breed/${selectedBreed}/images/random/2`;
    fetch(imageUrl)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          const dataList = data.message;
          setDogImageList(dataList);
        }
      })
  });

  return (
    <div className='flex flex-col justify-center'>
      <BreedsSelect
        breeds = {breeds}
        selectedBreed = {selectedBreed}
        setSelectedBreed = {setSelectedBreed}
        getDogImage = {getDogImage}
      />
      <div className='flex flex-col w-1/2 mx-auto'>
        {dogImageList.map(img => <DogImage key={img} url={img} />)}
      </div>
    </div>
  )
}



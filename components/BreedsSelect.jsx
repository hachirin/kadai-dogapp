export function BreedsSelect(props) {
  let breeds = props.breeds;
  const listItem = breeds.map((breed) => 
    <option key={breed} value={breed}>{breed}</option>
  );

  return (
    <div>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-blue-600">セレクトワン！</h2>
        <p className="text-sm">好きな犬種を選んで！その犬さんのお写真が出てくるよ〜</p>
      </div>

      <div className="text-center my-4">
        <select 
          className="py-1 text-center rounded-full bg-blue-500 text-white"
          value={props.selectedBreed} 
          onChange={e => props.setSelectedBreed(e.target.value)}>
          <option value="">犬種を選択</option>
          {listItem}
        </select>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full ml-2" onClick={props.getDogImage}>表示</button>
      </div>
    </div>
  )
}
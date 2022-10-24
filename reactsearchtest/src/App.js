import { useMemo, useRef, useState } from 'react'

function App() {

  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")


  console.log(searchTerm)

  const inputRef = useRef()

 /*  const filteredItems = items.filter(item => {
    return item.toLowerCase().includes(searchTerm.toLowerCase())
  }) */

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [items, searchTerm])

  const onSubmit = (e) => {
    e.preventDefault();

    
    const value = inputRef.current.value;
    if (value === "") return

    // console.log(value);

    setItems(prev => ([...prev, value]))

    inputRef.current.value = ""
  }

  /*  const onChange = (e) => {
     const value = e.target.value;

     console.log(value);

     setItems(prev => {
      return prev.filter(item => item.toLowerCase().includes(value.toLowerCase()))
     })


   }; */

  return (
    <div className="App">
      Search
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <br /> <br />
      <form onSubmit={onSubmit}>
        New item:
        <input ref={inputRef} type="text" />
        <button type="submit">Add item</button>
      </form>
      <h3>Items</h3>
      <ul>
        {filteredItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

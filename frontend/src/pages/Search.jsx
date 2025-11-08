import React, { useEffect, useRef, useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

const Search = () => {

  const [search, setSearch] = useState("");
  const[isOpen,setIsOpen]=useState(false)
  const inputRef=useRef(null)


  useEffect(()=>{
    if(isOpen && inputRef.current){
      inputRef.current.focus()
    }
  },[isOpen])

  const handleSearch = async()=>{

    let api = `${BackEndUrl}/product/search`;

        try {
            const response = await axios.post(api, {search:search})
            console.log(response.data);
            
        } catch (error) {
            console.log(error);
            
        }

  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{ cursor: "pointer", fontSize: "24px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
        <FaSearch />
        </span>

        
        <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          style={{
            width: isOpen ? "200px" : "0",
            opacity: isOpen ? 1 : 0,
            marginLeft: isOpen ? "10px" : "0",
            transition: "width 0.3s, opacity 0.3s, margin 0.3s",
            padding: isOpen ? "5px 10px" : "0",
            border: isOpen ? "1px solid #ccc" : "none",
            overflow: "hidden",
          }}
        />

        
        {isOpen && (
         <button onClick={handleSearch} className="search-btn">Search</button>
        
        )}
      </div>
    </>
  );
}

export default Search
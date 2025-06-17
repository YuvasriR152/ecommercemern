import { useState } from "react"
import { useNavigate } from "react-router-dom";
export default function Search(){

    const[keyword,setKeyword]=useState("");
    const navigate=useNavigate();
    const SearchHandler=()=>{
        navigate('/search?keyword='+keyword);
    }
    return(
        <div className="search-wrapper">
        <input
          type="text"
          id="search_field"
          onChange={(e)=>setKeyword(e.target.value)}
          placeholder="Enter Product Name ..."
          onBlur={SearchHandler}
          className="form-control"
        />
        <button onClick={SearchHandler} id="search_btn">
          <i className="fa fa-search" style={{ color: '#000' }}></i>
        </button>
      </div>
    )
}
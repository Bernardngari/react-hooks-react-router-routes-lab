import React from "react";
import { movies } from "../data";

function Movies() {


const items=movies.map((item)=>(
<div key={item.title}>
      <h3>{item.title}</h3>
      <p>{item.time}</p>
      <ul>{item.genres.map((listItem)=><li key={listItem}>{listItem}</li>)}</ul>
</div>

))
  return <div>
            <h1>Movies Page</h1>
            {items}
          </div>
}

export default Movies;

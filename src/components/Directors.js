import React from "react";
import { directors } from "../data";

function Directors(){
const director= directors.map((item)=>(
<React.Fragment key={item.name}>
  <h3>{item.name}</h3>
  <ul>{item.movies.map((mv)=><li key={mv}>{mv}</li>)}</ul>
</React.Fragment>

))

  return <div>
            <h1>Directors Page</h1>
            {director}
        </div>
}

export default Directors;

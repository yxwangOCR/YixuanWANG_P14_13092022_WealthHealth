
import * as React from "react";
import MuiAutoComplete from "./MuiAutoComplete";

const Mui = ({ control }) =>{
  return (
    
    <div className="container">
      <section>
        <MuiAutoComplete control={control} />
      </section>
    </div>
  
  )
}

export default Mui

//Exemple: https://github.com/react-hook-form/react-hook-form/discussions/2904 
import React from "react";

const BookInput = () => {
  return (
    <div>
      <form>
        <input type='text' placeholder="Enter the author"/>
        <input type='text' placeholder="Enter the title"/> 
        <button type="submit">Submit</button>      
      </form>
    </div>
  )
}

export default BookInput;
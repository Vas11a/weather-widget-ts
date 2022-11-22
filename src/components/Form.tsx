import React, {FC} from 'react'

const Form:FC = () => {
  return (
    <form action="" className="forma">
      <input type="text" className="latInp" placeholder="Enter city" />
      <input type="button" className="send" value="Send" />
    </form>
  );
}

export default Form

import React from 'react'
import "./style3.css";


export default function Frmbts() {
 
 
 
 
 
 
    return (

        <div className="contain">

  <div className="wrapper">
    <div className="contacts">
      <h3>Form teste</h3>

      <ul>
        <li>YDUQS</li>
        <li>00-1212121-11</li>
        <li>ydqs@mail.com</li>
      </ul>
    </div>

    <div className="form">
      <h3>Send us a message</h3>
      <form action="">
        <p>
          <label for="">name </label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Skype</label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Email </label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Email </label>
          <input type="text"/>
        </p>
        <p>
          <label for="">Email </label>
          <input type="text"/>
        </p>
        
        <p>
          <label for="">Topic</label>
          <input type="text"/>
        </p>
        <p className="full-width">
          <label for="">Message</label>
          <textarea name="" id="" cols="30" rows="7"></textarea>
        </p>
        <p className="full-width">
          <button>Send</button>
        </p>
      </form>
    </div>
  </div>
</div>


  )
}

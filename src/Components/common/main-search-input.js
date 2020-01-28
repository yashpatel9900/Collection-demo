import React from 'react'

const Mainsearchinput = ({placeholder = "placeholder"}) => {
  return (
    <div class="container" >
      <div class="row justify-content-md-center">
        <div class="col-md-6">
          <div class="input-group input-group-lg">
            <i class="material-icons">search</i>
            <input type="text" className="form-control search-placeholder " style={{ borderWidth: 0 }} autoFocus placeholder={placeholder} font ariaLabel="Sizing example input" ariaDescribedby="inputGroup-sizing-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainsearchinput;
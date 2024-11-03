import React from 'react'

export default function card(props) {

  let options = props.options;
  let priceOptions = Object.keys(options);
  return (
    <div>
        <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src={props.ImgSrc} class="card-img-top" alt="..." style={{height:150 , objectFit : 'fill'}}/>
          <div class="card-body">
            <p class="card-text">
              {props.foodName}
            </p>
            <div className="container w-100">
              <select className="m-2 h-2 w-30">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-2 w-30 bg-warning rounded">
              {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
              </select>
              <div className="h-100 d-inline m-3">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

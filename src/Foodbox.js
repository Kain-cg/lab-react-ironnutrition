import React, { Component } from "react";


class Foodbox extends Component {
  constructor(props) {

    super(props)
    //El estado INICIAL del componente
    this.state = {
      food: this.props.food
      
    }
}

render() {

    return (

    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={this.props.image} alt="hola" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{this.props.name}</strong> <br />
              <small>{this.props.calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>


    )
  }
}

export default Foodbox






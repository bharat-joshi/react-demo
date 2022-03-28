import { Component } from "react";
import "./card.styles.css"


export default class MyCard extends Component{
    render(){

        const {name,email,id} = this.props.monster;;

        return(
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
        )
    }
}
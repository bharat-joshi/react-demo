import { Component } from "react";
import "./card-list.styles.css";
import  MyCard  from "../../components/card/card.component";


export default class CardList extends Component {
  render() {
    console.log("render card list");
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <MyCard monster={monster}></MyCard>
        ))}
      </div>
    );
  }
}

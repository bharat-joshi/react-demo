import { Component } from "react";
import './search-box.styles.css'
export default class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHanler } = this.props;

    return (
      <input type="text" className="search-box" placeholder={placeholder} onChange={(e)=> onChangeHanler(e)} />
    );
  }
}

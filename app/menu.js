import React from 'react';

export class Menu extends React.Component {

  handleClick(e) {
    var text = e.target.value;
    this.props.chooseVideo(text);
    console.log('Click Value:', text)
	}

  constructor(props) {
    super(props);
    this.handleClick =
      this.handleClick.bind(this);
  }

render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="a" /> aa
        <input type="radio" name="src" value="b" /> bb
        <input type="radio" name="src" value="c" /> cc
        <input type="radio" name="src" value="d" /> dd
        <input type="radio" name="src" value="e" /> ee
      </form>
    );
  }



}

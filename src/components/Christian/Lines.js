import React, {Component} from 'react';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: props.link,
            img: props.img,
            hovered: false,
        };
    }


    onMouseEnter = () => { this.setState({ hovered: true }); };
  
    onMouseLeave = () => { this.setState({ hovered: false }); };

    render() {
      const imageStyle = {
        height: '3%',
        position: 'fixed',
        float: 'left',
        marginLeft: '10px',
        opacity: this.state.hovered ? '0%' : '100%',
        tintColor: 'black',
      };

    return (
    <svg style = {imageStyle} 
      viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="0" x2="50" y2="200" stroke="black" strokeWidth = "10" />
    </svg>
    );
  }
} export default Links;
import React, {Component} from 'react';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            link: props.link,
            img: props.img,
            height: props.height,
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
        marginTop: this.state.height,
        marginLeft: '10px',
        opacity: this.state.hovered ? '0%' : '100%',
      };

    return (
      <a href = {this.state.link} className = {'mr-auto text-center'} style = {{textDecoration: 'none'}} 
        target = "_blank" rel = "noreferrer">
        <div onMouseOver = {this.onMouseEnter} onMouseOut = {this.onMouseLeave}>
            <img src = {this.state.img} alt =  "" style = {imageStyle}/>
        </div>
      </a>
    );
  }
} export default Links;
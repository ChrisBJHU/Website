import react, {Component} from 'react';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          link: props.link,
          img: props.img,
        };
      }

    render() {
        
const title = {

};


const subTitleStyle = { 

};

const textStyle = { 

};
const boxStyle = {
  backgroundColor: '#222629',
  opacity: '100',
  borderRadius: "10px",
  height: '300px',
  marginTop: '10px',
  borderStyle: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  width: '300px',
  display: "inline-block"
};

const imageStyle = {
height: "100px",
width: '100px',
};

return (
    <a href={this.state.link} target="_blank" rel="noreferrer">
    <div style = {boxStyle}>
        <img src= {this.state.img} alt = "" style = {imageStyle}/>
    </div></a>
        );
    }
}

    


export default Tile;
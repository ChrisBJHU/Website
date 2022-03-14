import react, {Component} from 'react';
import redirect from'../assets/redirect.png';
class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          link: props.link,
          img: props.img,
          title: props.title,
          text: props.text,
        };
      }

    render() {
        
const titleStyle = {
  fontSize: '20px',
  fontFamily: 'Helvetica',
  textAlign: "center",
  top: '-10px',
  color: "#66FCF1",
  position: 'relative',
  paddingBottom: '2x',
};


const subTitleStyle = { 

};

const textStyle = { 
  fontSize: '15px',
  fontFamily: 'Helvetica',
  color: "#66FCF1",
  top: '10px',
  position: 'relative',
  textAlign: "center",
  paddingBottom: '2x',
};
const boxStyle = {
  backgroundColor: '#222629',
  opacity: '100',
  borderRadius: "10px",
  height: '20%',
  marginTop: '10px',
  borderStyle: "none",
  boxSizing: "border-box",
  cursor: "pointer",
  width: '225%',
  display: "inline-block",
};

const imageStyle = {
height: "100px",
width: '100px',
};

const iconStyle = {
  position: 'relative',
  cursor: "pointer",
  height: '10%',
};

return (
    <div style = {boxStyle}>
      <img src= {this.state.img} alt = "" style = {imageStyle}/>
      <a href={this.state.link} class = {'mr-auto text-center'} target="_blank" rel="noreferrer">
        <img src= {redirect} alt = "" style = {iconStyle}/></a>
       <p style = {titleStyle}> {this.state.title}</p>
       <p style = {textStyle}> {this.state.text}</p>
    </div>
        );
    }
}

    


export default Tile;
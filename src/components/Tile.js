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
          isShown: false,
          hovered: false,
        };
      }


    onMouseEnter = e => {
      this.setState({ hovered: true });
    };
  
    onMouseLeave = e => {
      this.setState({ hovered: false });
    };

    render() {
      const boxStyle = {
        backgroundColor: this.state.hovered ? 'rgba(52, 52, 52, 0.6)': 'rgba(52, 52, 52, 0.4)',
        height: '300px',
        width: '300px',
        borderRadius: "10px",
        borderStyle: "none",
        position: 'center',
        boxSizing: "border-box",
        marginLeft: 'auto',
        marginTop: '10px',
        paddingBottom: '100px',
        
      };

      
      const titleStyle = {
        fontSize: '40px',
        fontFamily: 'Helvetica',
        textAlign: "center",
        color: "#66FCF1",
        marginTop: '1px',
        backgroundColor: 'transparent',

      };

      const textStyle = { 
        fontSize: '15px',
        fontFamily: 'Helvetica',
        color: "#66FCF1",
        marginLeft: '5px',
        marginRight: '5px',
        textAlign: "center",
        backgroundColor: 'transparent',

      };

      const imageStyle = {
        height: '30%',
        backgroundColor: 'transparent',
      };

      const iconStyle = {
        cursor: "pointer",
        position: "relative",
        marginRight: '15px',
        height: '10%',
        float: 'right',
        marginTop: '10px',
        backgroundColor: 'transparent',

      };


  
    return (
        <div onMouseOver = {this.onMouseEnter} onMouseOut = {this.onMouseLeave}>
          <div style = {boxStyle}>
          <img src= {this.state.img} alt = "" style = {imageStyle}/>
          <a href={this.state.link} class = {'mr-auto text-center'} target="_blank" rel="noreferrer">
            <img src= {redirect} alt = "" style = {iconStyle}/></a>
          <p style = {titleStyle}> {this.state.title}</p>
          <p style = {textStyle}> {this.state.text}</p>
          </div>
        </div>  
    );}
} export default Tile;
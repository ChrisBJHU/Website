import Line from "../../assets/line-symbol.png";
import Links from "../../components/Lines";
import Icons from "../../components/Icons";
import FadeIn from 'react-fade-in';

const Images = () => {
    const divSplit = {
        display: "flex",
        margin: '50px 0px',
        backgroundColor: 'white',
    };
    return(
        <div >
            <FadeIn delay= {50} transitionDuration={10}>
                <div style = {divSplit}>
                    <Links link= '#' img= {Line} />
                </div>
                <div style = {divSplit}>
                    <Icons link= '#' type = 'github' />
                </div>
                <div style = {divSplit}>
                    <Icons link= '#' type = 'twitter' />
                </div>
                <div style = {divSplit}>
                    <Icons link= '#' type = 'linkedin' />
                </div>
                <div style = {divSplit}>
                    <Icons link= '#' type = 'instagram' />
                </div>
                <div style = {divSplit}>
                    <Links link= '#' img= {Line}  />
                </div>
            </FadeIn>
        </div>
    );
};  export default Images;
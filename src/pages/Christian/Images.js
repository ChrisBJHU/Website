import Line from "../../assets/line-symbol.png";
import Links from "../../components/Christian/Lines";
import Icons from "../../components/Christian/Icons";
import FadeIn from 'react-fade-in';

const Images = () => {
    const divSplit = {
        zIndex: '10',
        top: '45%',
        padding: '1.2em 0',
        color: 'black',
        backgroundColor: 'white',
        position: 'absolute',
    };

    const iconSplit = {
        padding: '50px 0px 0px 0px',
    };

    return(
            <FadeIn delay= {50} transitionDuration={10}>
                <div style = {divSplit}>
                    <Links link= '#' img= {Line} />
                    <div style = {iconSplit}>
                        <Icons link= '#' type = 'github' stroke = 'black'/> 
                    </div>
                    <div style = {iconSplit}>
                        <Icons link= '#' type = 'twitter' stroke = 'black'/> 
                    </div>
                    <div style = {iconSplit}>
                        <Icons link= '#' type = 'linkedin' stroke = 'black'/> 
                    </div>
                    <div style = {iconSplit}>
                        <Icons link= '#' type = 'instagram' stroke = 'black'/> 
                    </div>
                    <div style = {iconSplit}>
                        <Links link= '#' img= {Line} />
                    </div>
                </div>
                </FadeIn>
    );
};  export default Images;
import Line from "../../assets/line-symbol.png";
import Links from "../../components/Lines";
import Icons from "../../components/Icons";
import FadeIn from 'react-fade-in';

const Images = () => {

    return(
        <div>
            <FadeIn delay= {50} transitionDuration={10}>
                <Links link= '#' img= {Line} height = "-150px" />
                <Icons link= '#' type = 'github' height = "-100px" />
                <Icons link= '#' type = 'twitter' height = "-50px" />
                <Icons link= '#' type = 'linkedin' height = "0px" />
                <Icons link= '#' type = 'instagram' height = "50px" />
                <Links link= '#' img= {Line} height = "100px" />
            </FadeIn>
        </div>
    );
};  export default Images;
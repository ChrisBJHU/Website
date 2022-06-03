import Line from "../../assets/line-symbol.png";
import Links from "../../components/Lines";
import Icons from "../../components/Icons";
import FadeIn from 'react-fade-in';

const Images = () => {

    return(
        <div>
            <FadeIn delay= {50} transitionDuration={10}>
                <Links link= '#' img= {Line} height = "350px" />
                <Icons link= '#' type = 'github' height = "400px" />
                <Icons link= '#' type = 'twitter' height = "450px" />
                <Icons link= '#' type = 'linkedin' height = "500px" />
                <Icons link= '#' type = 'instagram' height = "550px" />
                <Links link= '#' img= {Line} height = "600px" />
            </FadeIn>
        </div>
    );
};  export default Images;
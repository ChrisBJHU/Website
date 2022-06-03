import Line from "../../assets/line-symbol.png";
import Links from "../../components/Lines";
import Icons from "../../components/Icons";
import FadeIn from 'react-fade-in';

const Images = () => {

    return(
        <div>
            <FadeIn delay= {50} transitionDuration={10}>
                <Links link= '#' img= {Line} height = "35%" />
                <Icons link= '#' type = 'github' height = "40%" />
                <Icons link= '#' type = 'twitter' height = "45%" />
                <Icons link= '#' type = 'linkedin' height = "50%" />
                <Icons link= '#' type = 'instagram' height = "55%" />
                <Links link= '#' img= {Line} height = "60%" />
            </FadeIn>
        </div>
    );
};  export default Images;
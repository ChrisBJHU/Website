import Github from "../../assets/github.png";
import Arrow from "../../assets/line-symbol.png";
import Links from "../../components/Links";
import FadeIn from 'react-fade-in';

const Images = () => {

    return(
        <div>
            <FadeIn delay= {50} transitionDuration={10}>
                <Links link= '#' img= {Arrow} height = "-150px" />
                <Links link= '#' img= {Github} height = "-100px" />
                <Links link= '#' img= {Github} height = "-50px" />
                <Links link= '#' img= {Github} height = "0px" />
                <Links link= '#' img= {Github} height = "50px" />
                <Links link= '#' img= {Github} height = "100px" />
                <Links link= '#' img= {Arrow} height = "150px" />
            </FadeIn>
        </div>
    );
};  export default Images;
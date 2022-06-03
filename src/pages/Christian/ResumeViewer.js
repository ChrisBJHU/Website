import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Resume from "../../assets/Christian Bakhit Resume 2022.pdf";
import Header from "../../pages/Christian/ResumeHeader";
import Footer from "../../pages/Christian/Footer";

const ResumeViewer = () => {
    const docs = [
        { uri: Resume }
      ];
  
      const resumeBackground = {
        backgroundColor: '#223882',
        padding: '10px',
        paddingBottom: '10px',
      };

      const resumeStyle = {
        margin: '0px auto',
        justifyContent:'center', 
        align:'center',
        borderRadius: '10px',
        marginBottom: '10px',
        width: '50%',
        border: '10px solid #222629',
      };

  return (
    <div>
      <Header/>
      <div style = {resumeBackground}>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} config={{ header: { 
          disableHeader: true, 
          disableFileName: true, 
          retainURLParams: true }}} 
          style = {resumeStyle}  />
      </div>
      <Footer />
  </div>
  );
}; export default ResumeViewer;
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Resume from "../../assets/Jonathan/Bakhit_Jonathan_Resume.pdf";
import Header from "../../pages/Jonathan/ResumeHeader";
import Footer from "../../pages/Jonathan/Footer";

const ResumeViewer = () => {
    const docs = [
        { uri: Resume }
      ];
  
      const resumeBackground = {
        backgroundColor: '',
        padding: '10px',
        paddingBottom: '10px',
      };

      const resumeStyle = {
        margin: '0px auto',
        justifyContent:'center', 
        align:'center',
        borderRadius: '10px',
        marginBottom: '10px',
        width: '80%',
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
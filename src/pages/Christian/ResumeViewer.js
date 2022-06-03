import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Bakhit_Jonathan_Resume from "../../assets/Bakhit_Jonathan_Resume.pdf";

const ResumeViewer = () => {
    const docs = [
        { uri: require({Bakhit_Jonathan_Resume}) }
      ];
  

  return (
    <div>
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
  </div>
  );
}; export default ResumeViewer;
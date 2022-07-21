import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Resume from "../../assets/Christian/Christian Bakhit Resume 2022.pdf";
import Header from "../../pages/Christian/ResumeHeader";
import Footer from "../../pages/Christian/Footer";
import { isMobile } from "react-device-detect";

const ResumeViewer = () => {
  const docs = [{ uri: Resume }];

  const resumeBackground = {
    backgroundColor: "",
    padding: "10px",
    paddingBottom: "10px",
  };

  const resumeStyle = {
    margin: "0px auto",
    justifyContent: "center",
    align: "center",
    borderRadius: "10px",
    marginBottom: "10px",
    width: isMobile ? "100%" : "80%",
    border: "10px solid rgba(43, 43, 43, 0.8)",
  };

  return (
    <div>
      <Header />
      <div style={resumeBackground}>
        <DocViewer
          pluginRenderers={DocViewerRenderers}
          documents={docs}
          config={{
            header: {
              disableHeader: true,
              disableFileName: true,
              retainURLParams: true,
            },
          }}
          style={resumeStyle}
        />
      </div>
      <Footer />
    </div>
  );
};
export default ResumeViewer;

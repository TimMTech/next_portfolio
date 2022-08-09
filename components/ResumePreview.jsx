import { Document, Page, pdfjs } from "react-pdf";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SizeMe } from "react-sizeme";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePreview = () => {
  const pdfPrint = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => pdfPrint.current,
    pageStyle: "@page { size: A4; margin: 0mm; }",
  });

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <button
          className=" bg-blue-500 w-full py-2 px-10 text-white font-bold rounded-md"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>
      <div className="w-full p-2">
        <div className="flex self-start md:justify-center gap-4 py-2">
          <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
            <a
              href="https://www.linkedin.com/in/timur-mukhamedov-50b3b6221/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={40} />
            </a>
          </div>
          <div className="hover:scale-110 transition-all duration-500 shadow-[0_6px_10px_0_rgba(0,0,0,0.3)] rounded-full p-3 cursor-pointer">
            <a
              href="https://github.com/TimMTech"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={40} />
            </a>
          </div>
        </div>
        <SizeMe
          refreshRate={128}
          refreshMode={"debounce"}
          monitorHeight
          render={({ size }) => (
            <div ref={pdfPrint}>
              <Document
                file="/assets/resume/myresume.pdf"
                onLoadSuccess={() => console.log("Loaded")}
                onLoadError={() => console.error}
              >
                <div>
                  <Page pageNumber={1} width={size.width ? size.width : 1} />
                </div>
              </Document>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ResumePreview;

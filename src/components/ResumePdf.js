import React, {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf/dist/umd/entry.webpack';
import resumePath from "../assets/docs/resume.pdf"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {errorEmojis} from "../assets/jsons/constants";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePdf = (props) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [downloadClicked, setDownloadClicked] = useState(0);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }

    const emojiIndex = Math.floor(Math.random() * 10) % 9;

    const initialLoader = <>
        <div className="resume-pdf-loader">
            <div className="resume-loader-emoji full-width"
                 dangerouslySetInnerHTML={{__html: errorEmojis[emojiIndex]}}
                 style={{fontSize: emojiIndex == 8 ? "5rem" : "8rem"}}/>
            <div className="full-width">
                <div className="resume-loader-pulse">
                    <div className="resume-loader-ring"/>
                    <div className="resume-loader-ring"/>
                    <div className="resume-loader-ring"/>
                    <div className="resume-loader-ring"/>
                </div>
            </div>
            <div className="resume-loader-text full-width">
                The bits are flowing slowly today!
            </div>
        </div>
    </>;

    return (
        <div className="resume-pdf-wrapper">
            <div className="resume-pdf-main">
                <Document
                    file={resumePath}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={initialLoader}
                >
                    <Page pageNumber={pageNumber}/>
                </Document>
                <button className="download-pdf" onClick={() => {
                    setDownloadClicked(1);
                    const anchor_tag = document.getElementById("pdf-download-doc");
                    if (anchor_tag) {
                        anchor_tag.click();
                    }
                    setTimeout(function () {
                        setDownloadClicked(0);
                    }, 1000);
                }
                }>Download <FontAwesomeIcon icon={faTelegramPlane} className={downloadClicked ? "clicked" : ""}/>
                    <a style={{display: "none"}} href={resumePath} id='pdf-download-doc' download/>
                </button>
                {numPages !== null ? <div className="page-controls">
                    <button type="button" className={pageNumber === 1 ? "disabled" : ""} onClick={() => {
                        if (pageNumber !== 1) {
                            setPageNumber(pageNumber - 1);
                        }
                    }} aria-label="Pdf previous page"><FontAwesomeIcon icon={faChevronLeft}/></button>
                    <span>{pageNumber} of {numPages}</span>
                    <button type="button" className={pageNumber === numPages ? "disabled" : ""} onClick={() => {
                        if (pageNumber !== numPages) {
                            setPageNumber(pageNumber + 1);
                        }
                    }} aria-label="Pdf next page"><FontAwesomeIcon icon={faChevronRight}/></button>
                </div> : null}
            </div>
        </div>
    );
}

export default ResumePdf;
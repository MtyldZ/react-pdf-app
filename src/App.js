import React from "react";
import {PDFViewer} from "@react-pdf/renderer";
import {CollectionFormComponent} from "./components/CollectionFormDocument";
import './App.css';

// import Barcode from "react-barcode";

function App() {
    return (
        <div className="container">
            <PDFViewer>
                <CollectionFormComponent
                    totalInTL={'800,00 TRY'}
                    TLData={[
                        {
                            clipping: '200,00', piece: '3,00', total: '600,00',
                        },
                        {
                            clipping: '100,00', piece: '2,00', total: '200,00',
                        },
                    ]}
                    totalInUSD={'246,00 TRY'}
                    USDData={[
                        {
                            clipping: '2,00', piece: '123,00', total: '246,00',
                        },
                    ]}/>
            </PDFViewer>
            <div className="container wide">
                <PDFViewer>
                    <CollectionFormComponent
                        totalInTL={'800,00 TRY'}
                        TLData={[
                            {
                                clipping: '200,00', piece: '3,00', total: '600,00',
                            },
                            {
                                clipping: '100,00', piece: '2,00', total: '200,00',
                            },
                        ]}
                        totalInUSD={'246,00 TRY'}
                        USDData={[
                            {
                                clipping: '2,00', piece: '123,00', total: '246,00',
                            },
                        ]}
                    />
                </PDFViewer>
            </div>
            {/*<Barcode value="213-1232"/>*/}
        </div>
    );
}

export default App;

import React from "react";
import {Document, Page, Text, View} from '@react-pdf/renderer';
import {Styles} from "./style";
import {Styles as Constants} from "./react-pdf-style";

function ComponentBody(props) {
    if (props.data.length === 0) {
        return null;
    }

    return (
        <React.Fragment>
            <View style={Constants.row}>
                <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.bt1]}>
                    <Text style={Constants.textSmall}>
                        Küpür
                    </Text>
                </View>
                <View style={[Constants.col, Styles.textCell, Constants.floatToCenter, Constants.pv1, Constants.btl1]}>
                    <Text style={Constants.textSmall}>
                        Adet
                    </Text>
                </View>
                <View style={[Constants.col, Styles.textCell, Constants.floatToRight, Constants.pv1, Constants.btl1]}>
                    <Text style={Constants.textSmall}>
                        Toplam
                    </Text>
                </View>
            </View>
            {
                props.data.map(({clipping, piece, total}, index) => (
                    <View style={Constants.row} key={index.toString()}>
                        <View
                            style={[Constants.col, Styles.textCell, Constants.bt1, (index === props.data.length - 1 ? Constants.bb1 : null)]}>
                            <Text style={Constants.textTiny}>
                                {clipping}
                            </Text>
                        </View>
                        <View
                            style={[Constants.col, Styles.textCell, Constants.floatToCenter, Constants.btl1, (index === props.data.length - 1 ? Constants.bb1 : null)]}>
                            <Text style={Constants.textTiny}>
                                {piece}
                            </Text>
                        </View>
                        <View
                            style={[Constants.col, Styles.textCell, Constants.floatToRight, Constants.btl1, (index === props.data.length - 1 ? Constants.bb1 : null)]}>
                            <Text style={Constants.textTiny}>
                                {total}
                            </Text>
                        </View>
                    </View>
                ))
            }
        </React.Fragment>

    );
}


export const CollectionFormComponent = (props) => {
    const {
        companyName,
        serviceType,
        sealNo,
        clientName,
        bankName,
        formEditDate,
        servicePlace,
        clientAccountNo,
        arrivalDate,
        totalInTL,
        TLData,
        // [
        //     {
        //         clipping: '200,00', piece: '3,00', total: '600,00',
        //     },
        //     {
        //         clipping: '100,00', piece: '2,00', total: '200,00',
        //     },
        // ]
        totalInUSD,
        USDData,

    } = props;
    return (
        <Document>
            <Page size="A4" style={Styles.page}>
                <View style={Styles.header}>
                    <Text style={Styles.headerText}>
                        LC WAIKIKI
                    </Text>
                    <View style={Styles.headerRightPart}>
                        <View style={Styles.headerCodeContainer}>
                            {/*<Svg style={{flex: 1}}>*/}
                            {/*    <Barcode value="213-1232"/>*/}
                            {/*    /!* todo not working it suppose to work  *!/*/}
                            {/*</Svg>*/}
                        </View>
                        <Text style={Styles.headerFormNameText}>
                            KIYMET NAKİL VE NAKİT TAHSİLAT FORMU
                        </Text>
                    </View>
                </View>
                <View style={Constants.row}>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Firma adı: ${companyName || 'Import'}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Hizmet Tipi: ${serviceType || "BANKTAŞ'A TESLİM EDİLEN"}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1, Constants.br1]}>
                        <Text style={Constants.textMedium}>
                            {`Mühür No: ${sealNo || '87654'}`}
                        </Text>
                    </View>
                </View>
                <View style={Constants.row}>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Müşteri adı: ${clientName || 'Import'}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Banka Adı: ${bankName || 'TEB'}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1, Constants.br1]}>
                        <Text style={Constants.textMedium}>
                            {`Form Düzenleme Tarihi ${formEditDate}`}
                        </Text>
                    </View>
                </View>
                <View style={Constants.row}>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Hizmet Noktası Adı: ${servicePlace || 'İZM KARŞIYAKA HILLTOWN AVM'}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                        <Text style={Constants.textMedium}>
                            {`Müşteri Hesap No: ${clientAccountNo}`}
                        </Text>
                    </View>
                    <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1, Constants.br1]}>
                        <Text style={Constants.textMedium}>
                            {`BANTAŞ'a Teslim Tarihi: ${arrivalDate}`}
                        </Text>
                    </View>
                </View>
                <View style={Constants.row}>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1]}>
                        <View style={Constants.row}>
                            <View style={[Styles.textCell, Constants.floatToRight, Constants.pv1]}>
                                <Text style={Constants.textLarge}>
                                    {totalInTL || '---,--- TRY'}
                                </Text>
                            </View>
                        </View>
                        <ComponentBody
                            data={TLData || []}
                        />
                    </View>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1]}>
                        <View style={Constants.row}>
                            <View style={[Styles.textCell, Constants.floatToRight, Constants.pv1]}>
                                <Text style={Constants.textLarge}>
                                    {totalInUSD || '---,--- USD'}
                                </Text>
                            </View>
                        </View>
                        <ComponentBody
                            data={USDData || []}
                        />
                    </View>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1, Constants.br1]}>
                    </View>
                </View>
                <View style={Constants.row}>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1]}>
                    </View>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1]}>
                    </View>
                    <View style={[Constants.col, Styles.bigCell, Constants.btl1, Constants.br1]}>
                    </View>
                </View>
                <View style={Constants.row}>
                    {['TESİLMATI HAZIRLAYANLAR', 'DETAY SAYIM YAPAN PERSONEL(LER)']
                        .map((x, i) => (
                            <View style={[Constants.col, Constants.btl1, (i === 1 ? Constants.br1 : null)]}
                                  key={i.toString()}>
                                <View style={Constants.row}>
                                    <View style={Styles.textCell}>
                                        <Text style={Constants.textMedium}>
                                            {x}
                                        </Text>
                                    </View>
                                </View>
                                <View style={Constants.row}>
                                    {
                                        Array(2).fill(0).map((_, index) => (
                                            <View
                                                style={[Constants.col, Constants.bt1, (index === 1 ? Constants.btl1 : null)]}
                                                key={index.toString()}>
                                                <View style={[Constants.row, Styles.textCell]}>
                                                    <Text style={Constants.textMedium}>
                                                        AD SOYAD
                                                    </Text>
                                                </View>
                                                <View style={[Constants.row, Styles.textCell, Constants.pv5]}>
                                                    <Text style={Constants.textMedium}>
                                                        İMZA
                                                    </Text>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>
                        ))}
                </View>
                <View style={Constants.row}>
                    <View style={Constants.col}>
                        <View style={[Constants.row, Styles.textCell, Constants.btl1]}>
                            <Text style={Constants.textSmall}>
                                Yukarıda bulunan kıymetler tarafından hazırlanmış ve yine yukarıda yer alan klipse
                                mühürlenerek torbalanmıştır.
                            </Text>
                        </View>
                        <View style={[Constants.row, Styles.textCell, Constants.btl1, Constants.pv1]}>
                            <Text style={Constants.textMedium}>
                                TORBAYI AÇIP KIYMETLERİN GLOBAL TESPİTİNİ YAPAN PERSONELLER
                            </Text>
                        </View>
                        <View style={Constants.row}>
                            {
                                Array(2).fill(0).map((_, index) => (
                                    <View
                                        style={[Constants.col, Constants.btl1]}
                                        key={index.toString()}>
                                        <View style={[Constants.row, Styles.textCell]}>
                                            <Text style={Constants.textMedium}>
                                                AD SOYAD
                                            </Text>
                                        </View>
                                        <View style={[Constants.row, Styles.textCell, Constants.pv3]}>
                                            <Text style={Constants.textMedium}>
                                                İMZA
                                            </Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                        <View style={Constants.row}>
                            <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                                <Text style={Constants.textMedium}>
                                    ERP sistemine giriş yapan personelin
                                </Text>
                            </View>
                            <View style={[Constants.col, Styles.textCell, Constants.pv1, Constants.btl1]}>
                                <Text style={Constants.textMedium}>
                                    ERP İşlem Referans Numarası
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={Constants.col}>
                        <View style={[Constants.row, Styles.textCell, Constants.btl1, Constants.br1, Constants.pv1]}>
                            <Text style={Constants.textMedium}>
                                SAYIM VE FARKLILIK BİLGİLERİ
                            </Text>
                        </View>
                        <View style={Constants.row}>
                            <View style={[Constants.col, Styles.textCell, Constants.btl1, Constants.pv1]}>
                                <Text style={Constants.textMedium}>
                                    SAYIM VE FARKLILIK BİLGİLERİ
                                </Text>
                            </View>
                            <View
                                style={[Constants.col, Styles.textCell, Constants.floatToCenter, Constants.btl1, Constants.br1, Constants.pv1]}>
                                <Text style={Constants.textMedium}>
                                    .............................
                                </Text>
                            </View>
                        </View>
                        <View style={Constants.row}>
                            <View style={[Constants.col, Styles.textCell, Constants.btl1, Constants.pv1]}>
                                <Text style={Constants.textMedium}>
                                    BAŞLANGIÇ VE BİTİŞ TARİHİ
                                </Text>
                            </View>
                            <View
                                style={[Constants.col, Styles.textCell, Constants.floatToCenter, Constants.btl1, Constants.br1, Constants.pv1]}>
                                <Text style={Constants.textMedium}>
                                    ............. / .............
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={[Constants.bt1]}>
                </View>
            </Page>
        </Document>
    );
}

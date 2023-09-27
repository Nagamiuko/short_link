import React, { useEffect, useState } from "react";
import "./content.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import QRCode from "react-qr-code";
import { serverAPI } from "../../server";
const Content = () => {
  const [link, setLink] = useState("");
  const [qrcode, setQR] = useState("");
  const [copy, setCopy] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [countcopy, setCountCopy] = useState(0);
  const [countqr, setCountQR] = useState(0);
 
  console.log(countcopy);
  console.log(countqr);
  const ShortLink = async () => {
    try {
      setLoading(true);
      const sendLink = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      setLink(sendLink.data.result.full_short_link);
      setLoading(false);
      setError("");
    } catch (err) {
      setLoading(true);
      setLink("");
      setError(err);
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    setCount(count + 1)
    if (input.length) {
      ShortLink();
    }
  }, [input]);

  console.log(count);
  const saveHistoryLink = async (e) => {
    let Data = {
      full_link: input,
      short_link: link,
    };
    console.log(Data.view_page);
    try {
      if (Data.full_link === "" || Data.short_link === "") {
        alert("ไม่มีข้อมูล โปรดลองอีกครั้ง");
      } else {
        await axios.post(`${serverAPI}/api/add-history`, Data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const generaQR = (e) => {
    setQR(e);
  };
  const saveHistoryCilck = async (e) => {
    let Data = {
      count_click_copy: e,
    };
    console.log(e);
    try {
        // await axios.post(`${serverAPI}/api/add-view-history`, Data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="box-container">
        <div className="box-content-title">
          <div className="col">
            <div className="title-short">
              <p>URL</p> Short Link
            </div>
          </div>
          <div className="box-link-style">
            <div className="url-link">
              <input
                type="text"
                placeholder="Paste a link to short it"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                <CopyToClipboard text={link} onCopy={() => setCopy(true)}>
                  <div className={copy ? "nocopy" : "copy-link-short"}>
                    <button onClick={() => saveHistoryLink(1) || setCountCopy(1) }>
                      Copy Link
                    </button>
                  </div>
                </CopyToClipboard>
                <div
                  className="copy-link-short mt-2"
                  onClick={() => saveHistoryLink(1)}
                >
                  <a target="_back_url" href={link} onClick={()=> saveHistoryCilck(+1)}>
                    {link}
                  </a>
                </div>
                <div className={"copy-link-short"}>
                  <button onClick={() => generaQR(link) || saveHistoryLink(1) || setCountQR(1)}>
                    QR Code Generator
                  </button>
                </div>
                {qrcode === "" ? (
                  ""
                ) : (
                  <>
                    <QRCode
                      size={100}
                      style={{ height: "auto", maxWidth: "30%", width: "100%" }}
                      value={qrcode}
                      viewBox={`0 0 256 256`}
                    />
                  </>
                )}
                <div className={copy ? "nocopy" : "copy-link-short"}></div>
              </div>
            )}
            {error ? <div className="error">*ใส่ข้อมูลไม่ถูกต้อง</div> : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;

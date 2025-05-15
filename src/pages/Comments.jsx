import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase-config';

export default function Comments() {
    const [message, setMessage] = useState([]);

  const issuesCollectionRef = collection(db, "comments");

  useEffect(() => {
    const getIssueList = async () => {
      try {
        const data = await getDocs(issuesCollectionRef);
        const formattedData = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessage(formattedData);
      } catch (err) {
        console.error(err);
      }
    };
    getIssueList();
  }, []);

    

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        rowGap: "100px",
        width: "100%",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          rowGap: "100px",
          width: "90%",
          borderRadius: "5px",
          backgroundColor: "red",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            minHeight: "10vh",
          }}
        >
          <h2 style={{ color: "black" }}>Sizden Gelenler</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/*Döngü başlangıc */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              minHeight: "10vh",
              alignItems: "center",
              backgroundColor: "green",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20%",
                height: "100%",
                alignItems: "center",
                borderRight: "1px solid black",
                backgroundColor: "purple",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <h3>{message.whom}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    minHeight: "200px",
                    width: "90%",
                    color: "black",
                  }}
                >
                  <div>Açıklama</div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                height: "100%",
                alignItems: "center",
                borderRight: "1px solid black",
                backgroundColor: "blue",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "brown",
                  borderBottom: "1px solid gray",
                }}
              >
                <h3>Konu</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "20px",
                    minHeight: "200px",
                    width: "90%",
                    color: "black",
                  }}
                >
                  <div>Açıklama</div>
                </div>
              </div>
            </div>
          </div>
          {/*Döngü bitiş */}

          {message.map((msg) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                minHeight: "10vh",
                alignItems: "center",
                backgroundColor: "green",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "20%",
                  height: "100%",
                  alignItems: "center",
                  borderRight: "1px solid black",
                  backgroundColor: "purple",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <h3>{msg.whom}</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "20px",
                      minHeight: "200px",
                      width: "90%",
                      color: "black",
                    }}
                  >
                    <div>Açıklama</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  height: "100%",
                  alignItems: "center",
                  borderRight: "1px solid black",
                  backgroundColor: "blue",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    alignItems: "center",
                    backgroundColor: "brown",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <h3>{msg.subject}</h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "20px",
                      minHeight: "200px",
                      width: "90%",
                      color: "black",
                    }}
                  >
                    <div>{msg.description}</div>
                  </div>

                  {msg.sub_messages &&
                  Object.keys(msg.sub_messages).length > 0 ? (
                    <div>
                      <h5>Alt Mesajlar:</h5>
                      {Object.entries(msg.sub_messages).map(([key, value]) => (
                        <div key={key}>
                          <strong>{key}:</strong> {JSON.stringify(value)}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Alt mesaj yok.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

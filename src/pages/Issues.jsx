import React, { useEffect, useState, useRef } from 'react';
import "../css/Issues.css";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export default function Main() {
  const [issueList, setIssueList] = useState([]);
  const [message, setMessage] = useState("Yükleniyor...");
  const containerRef = useRef(null);
  
  const issuesCollectionRef = query(collection(db, "issues"), orderBy('index'));

  useEffect(() => {
    const getIssueList = async () => {
      try {
        const data = await getDocs(issuesCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setIssueList(filteredData);
        setMessage(null);
      } catch (err) {
        console.log(err);
        setMessage("Veriler yüklenemedi");
      }
    };
    getIssueList();
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust scroll amount as needed
      behavior: 'smooth',
    });
  };

  // Determine if the arrows should be displayed based on the number of issues and container width
  const shouldShowArrows = issueList.length * 300 > window.innerWidth * 0.8; // Adjust `300` to match your item width, and `0.8` to match container width (80vw)

  return (
    <div id='issues-container' style={{ display: 'flex',flexDirection:"row", alignItems: 'center' }}>
      {/* Left Arrow, conditionally rendered */}
      {shouldShowArrows && (
        <button onClick={scrollLeft} style={{ fontSize: '24px',backgroundColor:"var(--theme-color)", marginRight: '10px' }}>◀</button>
      )}

      <div
        ref={containerRef}
        style={{
          display: 'flex',
          overflowX: 'hidden',
          scrollBehavior: 'smooth',
          gap: '30px',
          width: '80vw', // Adjust width as needed
          padding: '10px 0',
          ...( !shouldShowArrows && { alignItems: "center", justifyContent: "center" } ),
        }}
      >
        {message && <p>{message}</p>}
        {issueList.map((issue, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div style={{ color: 'var(--issue-header)' }}><h2>{issue.header}</h2></div>
            <div>
              <img src={issue.url} alt={issue.header} style={{ width: '300px', height: 'auto' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow, conditionally rendered */}
      {shouldShowArrows && (
        <button onClick={scrollRight} style={{ fontSize: '24px', backgroundColor:"var(--theme-color)", marginLeft: '10px' }}>▶</button>
      )}
    </div>
  );
}

import React from 'react'

export default function NotFound() {
  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        height: "100vh", // Tam ekran yüksekliği vermek için
        color: "white", // Yazı rengini belirgin yapmak için
        backgroundColor:"black"
      }}>
      <h2>Not Found 404.</h2>
    </div>
  )
}

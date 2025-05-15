import React, { useEffect, useState } from 'react'

export default function CountDown() {
    const targetDate = new Date('2024-09-06T23:59:59');
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const newTimeLeft = targetDate - now;
            if (newTimeLeft <= 0) {
                setTimeLeft(0);
                clearInterval(interval);
            } else {
                setTimeLeft(newTimeLeft);
            }
        }, 1000);

        return () => clearInterval(interval); // Bileşen unmont edildiğinde zamanlayıcıyı temizle
    }, [targetDate]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return (
    <div id='countdown-container' style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
        <h2 style={{fontWeight:"bold",color:"white"}}>7 Eylül 2024</h2>
        <p style={{fontSize:20}}>{days} Gün {hours} Saat {minutes} Dakika {seconds} Saniye kaldı!</p>      
    </div>
  )
}

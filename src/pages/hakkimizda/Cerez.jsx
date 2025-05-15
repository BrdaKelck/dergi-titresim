import React from 'react'
import "../../css/Hakkimizda.css"

export default function Page() {
  return (
    <div id='container'>
        <div id="header">
            <h1 style={{color:"white"}}>Çerez Politikası</h1>
        </div>
         <div id='informations-section'>
            <div className='informations'>
                <h2 style={{color: "white"}}>1. Çerez Nedir?</h2>
                <p>Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza veya cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, sitenin daha etkin çalışmasını sağlamak, kullanım deneyiminizi iyileştirmek ve site üzerinde belirli bilgileri hatırlamak amacıyla kullanılır.</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>2. Hangi Çerezleri Kullanıyoruz?</h2>
                <p>Web sitemizde çeşitli türlerde çerezler kullanılmaktadır:</p>
                <ul>
                    <li><p>Gerekli Çerezler: Bu çerezler, web sitemizin doğru şekilde çalışması için gereklidir. Siteyi dolaşmanıza ve özelliklerinden yararlanmanıza olanak tanır.</p></li>
                    <li><p>Performans Çerezleri: Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığı hakkında bilgi toplar. Bu bilgiler, siteyi iyileştirmek ve kullanıcıların siteyi nasıl kullandığını analiz etmek için kullanılır.</p></li>
                    <li><p>Fonksiyonel Çerezler: Bu çerezler, kullanıcı tercihlerini hatırlayarak siteyi kişiselleştirir. Dil ayarlarınız veya giriş bilgilerinizi hatırlayarak siteyi daha kullanıcı dostu hale getirir.</p></li>
                    <li><p>Hedefleme/ Reklam Çerezleri: Bu çerezler, ilgi alanlarınıza uygun reklamlar sunmak için kullanılır. Ayrıca reklam kampanyalarının etkinliğini ölçmemize yardımcı olur.</p></li>
                </ul>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>3. Çerezlerin Yönetimi</h2>
                <p>Tarayıcı ayarlarınızı değiştirerek çerezlerin kaydedilmesini engelleyebilir veya mevcut çerezleri silebilirsiniz. Ancak, çerezlerin devre dışı bırakılması durumunda, web sitemizin bazı özellikleri düzgün çalışmayabilir.</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>4. Üçüncü Taraf Çerezler</h2>
                <p>Web sitemizde, üçüncü taraf hizmet sağlayıcıların çerezleri de kullanılabilir. Bu çerezler, üçüncü tarafların kendi çerez politikalarına tabidir ve bizim kontrolümüzde değildir.    </p>
            </div>
            <div className='informations'> 
                <h2 style={{color: "white"}}>5. Çerez Politikası Değişiklikleri</h2>
                <p>Bu Çerez Politikası zaman zaman güncellenebilir. Güncellemeler, bu sayfada yayınlanacak ve en üstte yer alan "Son Güncelleme" tarihi ile belirtilecektir.</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>6. İletişim</h2>
                <p>Bu Çerez Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle dergititresim@gmail.com adresinden iletişime geçin.</p>
            </div>
         </div>
    </div>
  )
}

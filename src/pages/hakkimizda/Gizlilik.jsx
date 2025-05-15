import React from 'react'
import "../../css/Hakkimizda.css"

export default function Page() {
  return (
      <div id='container'>
        <div id="header">
            <h1 style={{color:"white"}}>Gizlilik Politikası</h1>
        </div>
         <div id='informations-section'>
              <div className='informations'>
                <h2 style={{color: "white"}}>1. Toplanan Bilgiler</h2>
                <p>Web sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda, aşağıdaki türde bilgiler toplanabilir:</p>
                <ul>
                    <li><p>Kişisel Bilgiler: Adınız, e-posta adresiniz, telefon numaranız gibi kimliğinizi belirleyebilecek bilgiler. Bu bilgiler, yalnızca sizin tarafınızdan gönüllü olarak verildiğinde toplanır.</p></li>
                    <li><p>Otomatik Olarak Toplanan Bilgiler: Çerezler ve diğer izleme teknolojileri aracılığıyla, IP adresiniz, tarayıcı türünüz, işletim sisteminiz, ziyaret ettiğiniz sayfalar gibi bilgiler toplanabilir.</p></li>
                </ul>
              </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>2. Bilgilerin Kullanımı</h2>
                <p>Toplanan bilgiler, aşağıdaki amaçlarla kullanılabilir:</p>
                <ul>
                    <li><p>Hizmetlerimizi sunmak ve geliştirmek.</p></li>
                    <li><p>Kullanıcı deneyiminizi kişiselleştirmek.</p></li>
                    <li><p>İletişim kurmak ve taleplerinizi yanıtlamak.</p></li>
                    <li><p>Site trafiğini analiz etmek ve siteyi optimize etmek.</p></li>
                    <li><p>Yasal yükümlülüklere uymak.</p></li>
                </ul>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>3. Bilgilerin Paylaşımı</h2>
                <p>Dergi Titreşim, kişisel bilgilerinizi üçüncü taraflarla satmaz, kiralamaz veya paylaşmaz. Ancak, aşağıdaki durumlarda bilgilerinizi paylaşabiliriz:</p>
                <ul>
                    <li><p>Yasal zorunluluklar gereği.</p></li>
                    <li><p>Hizmet sağlayıcılarımızla (örneğin, barındırma hizmeti sağlayıcıları) çalışırken.</p></li>
                    <li><p>Dergi Titreşim'in varlıklarının satışı veya devri durumunda.</p></li>
                </ul>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>4. Bilgilerin Güvenliği</h2>
                <p>Kişisel bilgilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler alınmaktadır. Ancak, internet üzerinden yapılan veri iletimlerinin tamamen güvenli olduğunu garanti edemeyiz.</p>
            </div>
            <div className='informations'> 
                <h2 style={{color: "white"}}>5. Üçüncü Taraf Bağlantıları</h2>
                <p>Sitemizde üçüncü taraf web sitelerine bağlantılar bulunabilir. Bu sitelerin gizlilik uygulamalarından Dergi Titreşim sorumlu değildir. Bu siteleri ziyaret ettiğinizde, ilgili sitelerin gizlilik politikalarını incelemenizi öneririz.</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>6. Çocukların Gizliliği</h2>
                <p>Dergi Titreşim, 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz. 13 yaşın altındaki bir çocuğun bize kişisel bilgi sağladığını fark edersek, bu bilgileri derhal sileceğiz.</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>7. Gizlilik Politikası Değişiklikleri</h2>
                <p>Bu Gizlilik Politikası zaman zaman güncellenebilir. Herhangi bir değişiklik yapıldığında, bu sayfada yayınlanacaktır. Politika değişikliklerinden haberdar olmak için bu sayfayı düzenli olarak kontrol etmenizi öneririz.​</p>
            </div>
            <div className='informations'>
                <h2 style={{color: "white"}}>8. İletişim</h2>
                <p>Bu Gizlilik Politikası ile ilgili sorularınız veya endişeleriniz varsa, lütfen bizimle dergititresim@gmail.com adresinden iletişime geçin.​</p>
            </div>
         </div>
      </div>
  )
}

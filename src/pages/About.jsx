import React from 'react'
import resim1 from "../assets/image/about/af-1.png"
import resim2 from "../assets/image/about/af-2.png"
import resim3 from "../assets/image/about/af-2.png"
import carResim from "../assets/image/about/about-pic.jpg"
import "../styles/About.css"
export default function About() {
  return (
    <>
    <section class="about spad">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div  class="section-title about-title">
          <h2>SEEN Otomobil'e Hoş Geldiniz.<br />İhtiyacınız Olan Arabalar İçin Buradayız.</h2>
        </div>
      </div>
    </div>
    <div class="about__feature">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="about__feature__item">
            <img src={resim1} alt="" />
            <h5>Kalite Güvence Sistemi</h5>
            <p>Bu sadece bir sözden ibaret değildir. Bu bizim görevimizdir. Beklentileri aşmak ve hiçbir şeyi şansa bırakmamak için sürekli olarak çalışmayı gerektirir.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="about__feature__item">
            <img src={resim2} alt="" />
            <h5>Doğru Test Süreçleri</h5>
            <p>Test süreçlerimiz, Mühendislerle birlikte yüksek denetimler altında yapılmaktadır.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="about__feature__item">
            <img src={resim3} alt="" />
            <h5>Entegrasyon Teknolojileri</h5>
            <p>Entegrasyon sistemlerimizde son teknoloji uygulamalar kullanarak araçlarımızın kalitesini güvence altına alıyoruz.</p>
          </div>
        </div>
      </div>
    </div>
    <div  class="row">
      <div class="col-lg-12">
        <div class="about__pic">
          <img src={carResim} alt="" />
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="about__item">
          <h5>Misyonumuz</h5>
          <p>Temsil ettiğimiz markaların gücünü, kuruluşumuzdan bu yana içimizde barındırdığımız şeffaflık, dürüstlük ve çalışma azmiyle birleştirerek, otomotiv ve ilgili sektörlerde yenilikçi, güvenilir ve analitik yaklaşımlarla kaliteli hizmet sunmaktır.</p>
        </div>
      </div>
      <div  class="col-lg-6 col-md-6 col-sm-6">
        <div class="about__item">
          <h5>Vizyonumuz</h5>
          <p >
            Yenilikçiliği, sürekli gelişimi ve değişimi ilke edinmiş insan
            kaynağı ve kurumsal yapısıyla; çevresine güven veren öncü bir hizmet
            şirketi olmak.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
  )
}

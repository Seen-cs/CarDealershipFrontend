import React from 'react'
import resim1 from "../assets/image/feature/feature-1.png"
import resim2 from "../assets/image/feature/feature-2.png"
import resim3 from "../assets/image/feature/feature-3.png"
import resim4 from "../assets/image/feature/feature-4.png"
import resim5 from "../assets/image/feature/feature-5.png"
import resim6 from "../assets/image/feature/feature-6.png"
import "../styles/Home.css"
import Footer from '../layouts/Footer'
export default function Home() {
  return (
    <>
    <section className="feature spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="feature__text">
          <div className="section-title">
            <span >Biz kimiz ?</span>
            <h2>Otomobilin Güvenli ve Hızlı Adresiyiz.</h2>
          </div>
          <div className="feature__text__desc">
            <p>
              A'dan B'ye gitmek için getirdiğimiz yeni yorum. Bize dilediğiniz
              zaman, dilediğiniz şekilde erişin.
            </p>
            <p>
              Araçlarımızı başkalarını önemseyen insanlar için üretiyoruz. Bu
              nedenle konu güvenlik olduğunda sizi ve yolcularınızı düşündüğümüz
              kadar çevrenizi de düşünüyoruz.
            </p>
          </div>
          <button type="button" className="btn btn-secondary">
            Satıcılarımız / Bayilerimiz
          </button>
        </div>
      </div>
      <div className="col-lg-4 offset-lg-4">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim1} alt="" />
              </div>
              <h6>Motor</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim2} alt="" />
              </div>
              <h6>Turbo</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim3} alt="" />
              </div>
              <h6>Sağlık</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim4} alt="" />
              </div>
              <h6>Süspansiyon</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim5} alt="" />
              </div>
              <h6>Elektrik</h6>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-6">
            <div className="feature__item">
              <div className="feature__item__icon">
                <img src={resim6} alt="" />
              </div>
              <h6>Fren</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
    <Footer></Footer>
    </>
  )
}

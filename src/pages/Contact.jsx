import React from 'react'
import "../styles/Contact.css"
export default function Contact() {
  return (
<>
<>
  <div style={{marginBottom:"2rem"}} className="container-fluid px-5 d-none d-lg-block">
    <div className="row gx-5">
      <div className="col-lg-4 text-center py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-geo-alt fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Ofis</h6>
            <span>
              Acarlar, Şehit, Ali Karakuzu Sk.
              No:10,45400,Turgutlu/Manisa,Türkiye
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center border-start border-end py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-envelope-open fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Email</h6>
            <span style={{textDecoration:"underline"}} >seen@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center py-3">
        <div className="d-inline-flex align-items-center">
          <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
          <div className="text-start">
            <h6 className="text-uppercase fw-bold">Bizi Arayın</h6>
            <span>+905446552712</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container-fluid py-6 px-5">
    <div className="row gx-0 align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{ height: 600 }}>
        <iframe
          className="w-100 h-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.822449295487!2d27.705848099999997!3d38.4917387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b9a791df45ce87%3A0xe32779b610d2d400!2sManisa%20Celal%20Bayar%20%C3%9Cniversitesi%2C%20Hasan%20Ferdi%20Turgutlu%20Teknoloji%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1671127779051!5m2!1str!2str"
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
      <div style={{backgroundColor:"red"}} className="col-lg-6">
        <div className="contact-form bg-secondary p-5">
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control border-0"
                placeholder="İsim"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="email"
                className="form-control border-0"
                placeholder="Email"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Konu"
                style={{ height: 55 }}
              />
            </div>
            <div className="col-12">
              <textarea
                className="form-control border-0"
                rows={4}
                placeholder="Mesaj"
                defaultValue={""}
              />
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Gönder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


</>
  )
}

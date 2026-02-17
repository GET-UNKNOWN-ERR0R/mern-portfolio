import "./Certification.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Certification = () => {

  const [certs, setCerts] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/certifications`)
      .then(res => setCerts(res.data));
  }, []);

  return (
    <section className="certification-section" id="certifications">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        Verified learning & credentials
      </p>

      <div className="certification-list">

        {certs.map(c => (
          <div className="certification-card" key={c._id}>
            <div className="cert-image">
              <img src={c.image} alt={c.title} />
            </div>

            <div className="cert-content">
              <h3>{c.title}</h3>
              <span className="cert-provider">{c.provider}</span>
              <span className="cert-year">{c.year}</span>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Certification;

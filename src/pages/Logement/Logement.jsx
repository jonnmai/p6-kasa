import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../assets/db.json";
import "../Logement/Logement.scss"

import Error from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Stars from "../../components/Stars/Stars";
import Collapse from "../../components/Collapse/Collapse";

function Logement() {
  const { logementId } = useParams();

  const logement = logements.find((logement) => logement.id === logementId);
  if (!logement) {
    return <Error />;
  }

  return (
    <>
      <section key={logement.id} className="logement_page">
        <Carousel img={logement.pictures} />
     

      <header className="housing_page_header">
        <article className="housing_page_header_infos">
          <h1 className="housing_page_header_infos_title">{logement.title}</h1>
          <h2 className="housing_page_header_infos_subtitle">
            {logement.location}
          </h2>
          <div className="housing_page_header_infos_tags">
            {logement.tags.map((tag, i) => (
              <p key={i} className="housing_page_header_infos_tags_tag">
                {tag}
              </p>
            ))}
          </div>
        </article>

        <article className="housing_page_header_hoster">
          <div className="housing_page_header_hoster_infos">
            <p className="housing_page_header_hoster_infos_name">
              {logement.host.name}
            </p>
            <img
              src={logement.host.picture}
              alt="host-cover"
              className="housing_page_header_hoster_infos_img"
            />
          </div>
          <Stars starValue={logement.rating} />
        </article>
      </header> 

      <article className="housing_page_collapses">
        <div className="housing_page_collapses_content">
          <Collapse label="Description" content={logement.description} />
        </div>

        <div className="housing_page_collapses_content">
          <Collapse label="Equipements" content={logement.equipments.map((equipment, i)=> (
            <ul key={i}>
              <li>• {equipment}</li>
            </ul>
          ))} 
          />
        </div>
      </article>
      
      </section>
    </>
  );
}

export default Logement;

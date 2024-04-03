import Banner from "../../components/Banner/Banner";
import BannerImg from "../../assets/bannerabout.png";
import Collapse from "../../components/Collapse/Collapse";

import "../About/About.scss"

function About() {
  return (
    <>
      <Banner imgUrl={BannerImg} />
      <article className="collapse_container" style={{ marginTop: "40px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Collapse
          label="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                    Les photos sont conformes aux logements, et toutes les informations 
                    sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          label="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                    Tout comportement discriminatoire ou de perturbation du voisinage
                    entraînera une exclusion de note plateforme."
        />
        <Collapse
          label="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une 
                    expérience parfaite. N'hésitez pas à nous contacter si vous avez 
                    la moindre question."
        />
        <Collapse
          label="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
                    pour les voyageurs, chaque logement correspond aux critères de sécurité
                    établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont 
                    bien respectés. Nous organisons également des ateliers sur la sécurité 
                    domestique pour nos hôtes."
        />
      </article>
    </>
  );
}

export default About;

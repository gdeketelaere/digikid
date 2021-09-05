import Image from "next/image";
import Header from "../components/Header/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <div className="container mx-auto flex py-10">
          <div>
            <h3>Pourquoi apprendre à coder</h3>
            <h4>LES CONTENUS NUMÉRIQUES : CONSOMMATION VERSUS CRÉATION</h4>
            <p>
              Les jeux vidéo et les applications pour smartphones figurent parmi
              les passe-temps préférés des enfants. Cela se traduit par une
              longue exposition aux écrans qui dépasse parfois le temps que nous
              souhaitions leur accorder. Mais il s’agit avant tout d’une
              occupation passive. En tant que parents, nous pouvons transformer
              leur intérêt inné pour les supports digitaux en une activité
              pédagogique productive. L’apprentissage du code permet aux
              enfants, initialement consommateurs de produits numériques, de
              devenir progressivement acteurs de leur création.
            </p>
          </div>
          <div>
            <Image
              src="/digikid-jeanne-pourquoi.png"
              alt="Pourquoi"
              width={635}
              height={505}
            />
          </div>
        </div>
      </div>
      <footer>
        Powered by{" "}
        <span>
          <Image
            src="/digikid-white.svg"
            alt="Digikid Logo"
            width={60}
            height={20}
          />
        </span>
      </footer>
    </>
  );
};
export default HomePage;

import Image from "next/image";
import { Footer } from "../components/Footer/footer";
import Header from "../components/Header/header";
import { HomeBloc } from "../components/Home/home-bloc";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100" id="why">
        <HomeBloc
          titre="Pourquoi apprendre à coder"
          soustitre="LES CONTENUS NUMÉRIQUES : CONSOMMATION VERSUS CRÉATION"
          contenu={
            <>
              Les jeux vidéo et les applications pour smartphones figurent parmi
              les passe-temps préférés des enfants. Cela se traduit par une
              longue exposition aux écrans qui dépasse parfois le temps que nous
              souhaitions leur accorder. Mais il s’agit avant tout d’une
              occupation passive.
              <br />
              <br /> En tant que parents, nous pouvons transformer leur intérêt
              inné pour les supports digitaux en une activité pédagogique
              productive. L’apprentissage du code permet aux enfants,
              initialement consommateurs de produits numériques, de devenir
              progressivement acteurs de leur création.
            </>
          }
          image={
            <Image
              src="/digikid-jeanne-pourquoi.png"
              alt="Pourquoi"
              width={635}
              height={505}
            />
          }
        />
      </div>
      <div id="lessons">
        <HomeBloc
          imageFirst
          titre="Les cours"
          soustitre="Développement d’un jeu en scratch"
          contenu={
            <>
              Le codage, c’est comme apprendre une langue étrangère : plus on
              est jeune, mieux c’est. Il y a de nombreuses façons d’enseigner la
              programmation, mais le plus difficile, c’est d’expliquer des
              concepts mathématiques abstraits tels que les axes, les paramètres
              et les variables aux jeunes enfants. Scratch, un langage de
              programmation développé par MIT Media Lab, relève ce défi. Il
              utilise une animation colorée qui aide à illustrer les concepts
              difficiles et ouvre la porte au merveilleux monde du codage.
              <br />
              <br /> <h4>Création d’un Yearbook intéractif en HTML et CSS</h4>
              <p>
                Le HTML et le CSS sont des langages web de base ; on commence
                donc généralement par leur apprentissage car ils sont assez
                simples à comprendre et car ils sont incontournables.
              </p>
            </>
          }
          image={
            <Image
              src="/digikid-languages.png"
              alt="Pourquoi"
              width={512}
              height={377}
            />
          }
        />
      </div>
      <div className="bg-black" id="teacher">
        <HomeBloc
          dark
          titre="Le prof"
          soustitre="Gilles , le papa de Louise, Hugo et Jeanne :)"
          contenu={
            <>
              Depuis plus de 20ans, je suis passionné de nouveaux médias. Mes
              premières amours et focus principale sont le web design et
              l’experience utilisateur. Mon expertise s’étend aussi au côté
              technique et sombre des internets :). J’adore designer et
              developper des sites de dingues en ajoutant toujours un touche fun
              et intéractive pour l’utilisateur!
            </>
          }
          image={
            <Image
              src="/digikid-family.png"
              alt="Pourquoi"
              width={315}
              height={315}
            />
          }
        />
      </div>
      <div className="bg-gray-100" id="infos">
        <section className="text-center p-20">
          <div className="container mx-auto">
            <h3>Infos pratiques</h3>
            <div className="md:flex py-10">
              <div className="text-left md:w-1/3 px-10">
                <h5>Quand</h5>
                <p>
                  Tous les lundi de 12h45 à 13h45 d’octobre à fin décembre (10
                  cours)
                </p>
                <h5>Où</h5>
                <p>
                  RDV fixé devant la porte des 3M en face du bureau de mme
                  jessica.Le cours sera donné dans le local informatique de
                  St-Léon
                </p>
              </div>
              <div className="text-left md:w-1/3  px-10">
                <h5>Qui</h5>
                <p>
                  les enfants de 4ème, 5ème et 6ème primaire Minimum de 6 élèves
                </p>
                <h5>Prix</h5>
                <p>
                  12€/Cours L’inscription se fait par Email. En cas d'absence
                  justifiée , le cours ne sera pas facturé
                </p>
              </div>
              <div className="text-left md:w-1/3  px-10">
                <h5>Materiel</h5>
                <p>
                  La classe dispose de 6 ordinateurs. Si l'enfant peut apporter
                  un laptop (sous sa responsabilité), c'est l'idéal pour pouvoir
                  continuer les exercices à la maison
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="text-center pt-20" id="register">
        <h3>Inscription & Contact</h3>
        <h4>
          Une question, une remarque, vous désirez inscrire votre enfant...
        </h4>
        <p>
          <a
            className="btn my-6 inline-block uppercase text-3xl bg-purple-800 hover:bg-purple-600 text-white py-4 px-8 rounded-lg font-digikid mb-24"
            href="mailto:gilles@digikid.be"
          >
            Envoyer moi un email
          </a>
          <br />
          <Image
            src="/digikid-contact.png"
            alt="contact"
            width={520}
            height={518}
          />
        </p>
      </section>
      <Footer />
    </>
  );
};
export default HomePage;

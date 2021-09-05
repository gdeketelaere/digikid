export const HomeBloc = ({
  titre,
  soustitre,
  contenu,
  image,
  imageFirst,
  dark,
}) => {
  return (
    <>
      <section className={`px-6 ${dark ? "dark" : ""}`}>
        <div className="container mx-auto md:flex  items-center ">
          {imageFirst && (
            <div className="md:w-3/6 w-full max-w-5xl text-center">{image}</div>
          )}
          <div className="md:w-3/6 w-full  max-w-5xl px-40 py-16">
            <h3>{titre}</h3>
            <h4>{soustitre}</h4>
            <p>{contenu}</p>
          </div>
          {!imageFirst && (
            <div className="md:w-3/6 w-full max-w-5xl text-center">{image}</div>
          )}
        </div>
      </section>
    </>
  );
};

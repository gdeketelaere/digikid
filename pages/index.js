import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <div className="bg-yellow-400">
        <Image
          src="/digikid-at-leon.svg"
          alt="Digikid@St-Leon Logo"
          width={460}
          height={150}
        />
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

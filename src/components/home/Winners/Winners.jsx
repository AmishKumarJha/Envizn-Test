import Container from "../../common/Container";
import WinnersHeader from "./WinnersHeader";
import WinnersGrid from "./WinnersGrid";
import WinnersCTAButton from "./WinnersCTAButton";

const Winners = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-12 bg-[#09040A]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,32,0.15),transparent_70%)]" />

      <Container>
        <div className="relative z-10">

          <WinnersHeader />

          <WinnersGrid />

          <div className="relative z-10 flex justify-center -mt-4">
            <WinnersCTAButton />
          </div>

        </div>
      </Container>

    </section>
  );
};

export default Winners;
import girl from "../../../assets/images/girl.png";
import girlSmall from "../../../assets/images/girl-small.png";
import man from "../../../assets/images/man-glasses.png";
import oldMan from "../../../assets/images/old-man.png";
import boy from "../../../assets/images/boy-star.png";
import blackMan from "../../../assets/images/black-man.png";

const FloatingAvatars = () => {
  return (
    <div className="relative w-[620px] h-[620px] shrink-0">

      <img
        src={girl}
        alt=""
        className="absolute left-24 top-6 w-36 z-20"
      />

      <img
        src={oldMan}
        alt=""
        className="absolute right-6 top-10 w-32 z-20"
      />

      <img
        src={man}
        alt=""
        className="absolute left-52 top-44 w-56 z-20"
      />

      <img
        src={girlSmall}
        alt=""
        className="absolute left-8 top-64 w-32 z-20"
      />

      <img
        src={boy}
        alt=""
        className="absolute right-2 top-58 w-40 z-20"
      />

      <img
        src={blackMan}
        alt=""
        className="absolute left-56 bottom-6 w-36 z-20"
      />

    </div>
  );
};

export default FloatingAvatars;
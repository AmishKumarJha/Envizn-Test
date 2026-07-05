import background from "../../../assets/images/Background_sphers.png";

const BackgroundEffects = () => {
  return (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <img
          src={background}
          alt=""
          className="absolute bottom-0 left-0 w-full object-cover opacity-90"
        />

      </div>

      {/* Orange Glow Left */}
      <div
        className="
        absolute
        -left-52
        top-60
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#FF6A1A]/20
        blur-[180px]
        pointer-events-none
      "
      />

      {/* Orange Glow Right */}
      <div
        className="
        absolute
        -right-52
        bottom-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#FF6A1A]/15
        blur-[180px]
        pointer-events-none
      "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#09040A]/40 pointer-events-none" />

      {/* Perspective Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">

        <div
          className="
          absolute
          inset-0
          [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
          [background-size:95px_95px]
          [transform:perspective(1200px)_rotateX(78deg)]
          origin-top
          top-[120px]
          scale-[2]
        "
        />

      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09040A] to-transparent pointer-events-none" />
    </>
  );
};

export default BackgroundEffects;
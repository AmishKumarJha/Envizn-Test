import footer from "../../../data/footer";

const FooterLinks = () => {
  return (
    <div>

      <h3 className="text-2xl font-semibold mb-6">
        Sales Mastery
      </h3>

      <div className="space-y-4 text-base">
        {footer.menu.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>

      <div className="flex gap-8 mt-8 text-sm">
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>

    </div>
  );
};

export default FooterLinks;
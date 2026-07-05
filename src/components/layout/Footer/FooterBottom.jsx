import footer from "../../../data/footer";

const FooterBottom = () => {
  return (
    <div className="flex justify-end gap-6 py-10 text-sm">
      <p>{footer.copyright}</p>
      <p>{footer.reserved}</p>
    </div>
  );
};

export default FooterBottom;
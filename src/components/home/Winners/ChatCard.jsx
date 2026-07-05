const ChatCard = ({ src, index }) => {
  return (
    <div className="mb-6 break-inside-avoid rounded-[20px] overflow-hidden border border-white/10 shadow-lg">
      <img
        src={src}
        alt={`proof-${index}`}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ChatCard;
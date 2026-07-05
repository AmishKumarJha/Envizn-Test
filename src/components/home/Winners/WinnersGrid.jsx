import winners from "../../../data/winners";
import ChatCard from "./ChatCard";

const WinnersGrid = () => {
  return (
    <div className="relative">

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {winners.chats.map((src, index) => (
          <ChatCard key={index} src={src} index={index} />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#09040A] to-transparent pointer-events-none" />

    </div>
  );
};

export default WinnersGrid;
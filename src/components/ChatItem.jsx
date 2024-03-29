import DP from "./DP";
import { BsPinAngleFill } from "react-icons/bs";

export default function ChatItem(chat) {
  return (
    <div className="grid grid-cols-6 pt-3 bg-gray-800 text-gray-200">
      <div className="self-center justify-self-center">
        <DP />
      </div>
      <div className="col-span-5 grid grid-cols-5 border-gray-200 border-b pb-3">
        <div className="col-span-4">
          <h5 className="font-semibold">{chat.chat.name}</h5>
          <p className="truncate text-sm">{chat.chat.recentText}</p>
        </div>
        <div className="inline-grid justify-end grid-flow-dense text-center text-xs pr-5 pb-4">
          {chat.chat.lastMessageTime}
          <div className="inline-flex justify-end mt-2 items-center">
            {chat.chat.isPinned && <BsPinAngleFill />}
            <span
              className={`${
                chat.chat.unreadMessages === 0 ? "hidden" : "block"
              } text-center ml-2 px-1.5 text-sm rounded-[50%] bg-green-400 text-slate-900`}>
              {chat.chat.unreadMessages}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

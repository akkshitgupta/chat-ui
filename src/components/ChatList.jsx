import ChatItem from "./ChatItem";

export default function ChatList(chats, sort) {
  return (
    <section className="overflow-y-scroll ">
      {!sort ? (
        <>
          {chats.data &&
            chats.data
              // .filter((chat) => chat.isPinned)
              .map((chat) => <ChatItem chat={chat} key={chat.id} />)}
        </>
      ) : (
        <>
          {chats.data &&
            chats.data
              .filter((chat) => chat.lastMessageTime)
              .map((chat) => <ChatItem chat={chat} key={chat.id} />)}
        </>
      )}
    </section>
  );
}

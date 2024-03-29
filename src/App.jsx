import { useEffect, useState } from "react";
import ChatList from "./components/ChatList";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SidePane from "./components/SidePane";
import chatsData from "./data.json";

function App() {
  const [list, setList] = useState(chatsData.chats);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    if (query !== "") {
      const searchedChat = list.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setList(searchedChat);
    } else {
      setList(chatsData.chats);
    }
  }, [query]);
  useEffect(() => {
    console.log(filtered);
    if (filtered) {
      const filteredChat = list.filter((item) => item.unreadMessages > 0);
      setList(filteredChat);
    } else {
      setList(chatsData.chats);
    }
  }, [filtered]);
  return (
    <main className="lg:grid gap-0 grid-cols-6">
      <section className="col-span-2 border-r-[0.5px] border-slate-300 bg-slate-800">
        <div className="sticky">
          <NavBar />
          <SearchBar
            setFilter={setFiltered}
            filtered={filtered}
            setQuery={setQuery}
          />
        </div>
        <ChatList data={list} />
      </section>
      <SidePane />
    </main>
  );
}

export default App;

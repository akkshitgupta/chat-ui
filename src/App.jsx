import ChatList from "./components/ChatList";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SidePane from "./components/SidePane";
import chatsData from "./data.json";

function App() {
  return (
    <main className="lg:grid gap-0 grid-cols-6">
      <section className="col-span-2 border-r-[0.5px] border-slate-300">
        <div className="sticky">
          <NavBar />
          <SearchBar />
        </div>
        <ChatList data={chatsData.chats} />
      </section>
      <SidePane />
    </main>
  );
}

export default App;

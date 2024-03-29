import { FaLock } from "react-icons/fa6";

export default function SidePane() {
  return (
    <section className="lg:block hidden text-slate-200 col-span-4 h-screen overflow-y-auto">
      <div className="w-2/3 grid mx-auto h-screen text-center fixed  bg-gray-800">
        <div className="self-end">
          <h1 className="text-6xl mb-4">WhatsApp Web</h1>
          <p>Send and recieve messages without keeping your phone online.</p>
          <p>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>

        <aside className="inline-flex items-center justify-center self-end pb-4 text-xs">
          <FaLock />
          <p className="ml-2">
            Your personal messages are end-to-end encrypted.
          </p>
        </aside>
      </div>
    </section>
  );
}

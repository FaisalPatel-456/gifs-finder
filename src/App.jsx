import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {

  return (

    <div className="w-full h-screen flex flex-col">

      <h1 className="bg-white rounded-md m-8 py-2 text-center text-3xl text-[#1e24e1] font-bold uppercase
      shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        GIFS Finder
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 m-8 items-center gap-10 mt-[30px]">

        <Random />

        <Tag />

      </div>

    </div>
  )
}

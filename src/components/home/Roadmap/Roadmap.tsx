import roadmap from "../../../assets/roadmap.png";

function Roadmap() {
  return (
    <div className="h-auto flex flex-col justify-center items-center lg:pt-12 pt-12 px-4 bg-gradient-to-tr from-gradient2 to-gradient1">
        <h1 className="text-3xl mb-2 text-white">🚧 ROADMAP 🏎</h1>
        <img src={roadmap} className="lg:w-1/2"></img>
    </div>
  );
}

export default Roadmap;

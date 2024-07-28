import WordRotate from "../components/WordRotater";
import Dock from "../components/Dock";
import Dock2 from "../components/Dock2";
import AnimatedBeam from "../components/Skills";
import BorderBeam from "../components/BorderBeam";
import MagicCard from "../components/MagicCard";
import Meteor from "../components/Meteor";
import Card from "../components/Card";
import Marque from "../components/Marque";
// import ThreeD from "../components/ThreeD";
export default function Home() {
  if(typeof window !== "undefined") {
    console.log("Hello from the client side");
  }
  return (
    <div className="w-full min-h-[100vh] bg-black justify-center items-center text-center">
      Home page <br />
      <WordRotate className="text-white" words={["Hello", "World", "Next.js", "TypeScript"]} />
      <div className="w-full flex flex-col items-center justify-center py-20">
        <Dock/>
      <Dock2/>
      </div>
      <div className="w-full flex items-center justify-center py-20">
        <AnimatedBeam/>
      </div>
      <div className="flex justify-center">
        <div className="relative py-20 rounded-xl bg-black">
          <BorderBeam />
        </div>
      </div>
      <div className="py-16">
      <MagicCard/>
      </div>
<Meteor/>
<Marque/>
<div className="h-[100vh] flex justify-center items-center">
  <Card/>
</div>
  {/* <div className="min-h-[100vh] zoom-in-0">
    <ThreeD/>
  </div> */}
       </div>
  );
}

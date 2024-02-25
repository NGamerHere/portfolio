import Nav from "@/components/Nav";
import words from "@/components/name";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import AnimateImage from "@/components/AnimateImage";
import AnimateText from "@/components/AnimateText";



export default function Home() {

  return (
      <div>
          <Nav/>
          <div className="flex flex-col items-center justify-center h-[60rem] w-full  ">
              <AnimateImage />
              <TypewriterEffectSmooth words={words}/>
              <AnimateText text="full stack developer" className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base " />

          </div>
      </div>

  );
}

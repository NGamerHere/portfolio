import Nav from "@/components/Nav";
import words from "@/components/name";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";



export default function Home() {

  return (
      <div>
          <Nav/>
          <div className="flex flex-col items-center justify-center h-[60rem]  ">

              <TypewriterEffectSmooth words={words}/>
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                  full stack web developer
              </p>
          </div>
      </div>

  );
}

import Nav from "@/components/Nav";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
interface Word {
    text: string;
    className?: string; // Optional property for custom class name
}

const words: Word[] = [
    {
        text: "N",
    },
    {
        text: "Datta",
    },
    {
        text: "sai",
    },
    {
        text: "Ram",
    },
    {
        text: "kumar",
        className: "text-blue-500 dark:text-blue-500",
    },
];

export default function Home() {

  return (
      <div>
          <Nav/>
          <div className="flex flex-col items-center justify-center h-[40rem]  ">

              <TypewriterEffectSmooth words={words}/>
              <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                  full stack web developer
              </p>
          </div>
      </div>

  );
}

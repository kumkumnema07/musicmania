import { SparklesText } from "@/components/ui/sparkles-text";
import Image from "next/image";


export default function NalasoparaCard(){
    return(
        <>
          <div className="relative w-full">
              <Image
                src="/logo/musiclogo/nalapora.svg"
                alt="Music Mania Virar"
                width={1920}
                height={800}
                className="w-full h-auto"
                priority
              />
        
              {/* overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
        
              {/* text */}
              <div className="absolute top-[35%] left-1/2 -translate-x-1/2">
                <SparklesText className="text-white text-2xl md:text-7xl font-bold  px-4 md:whitespace-nowrap">
                  Music Mania Nalasopara Branch
                </SparklesText>
              </div>
            </div>
        </>
    )
}
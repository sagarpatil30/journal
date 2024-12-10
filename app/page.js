import { Skeleton } from "@/components/ui/skeleton";
import { Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative container mx-auto px-4 pt-16 pb-16">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-extrabold">
            Your Space to{" "}
            <span className="text-transparent bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text">
              Journal
            </span>
            <br /> Your Story to Tell.
          </h1>

          <p className="text-lg md:text-xl text-black mb-8">
            Capture your thoughts, track your moods, and reflect on your journey
            in a beautiful, secure space.
          </p>
          <div className="relative">
            <div />
            <div className="bg-black rounded-2xl p-4 max-full mx-auto">
              <div className="border-b border-white pb-4 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-white" />
                  <span className="text-white">Today&rsquo;s Entry</span>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-white" />
                  <div className="h-3 w-3 rounded-full bg-white" />
                  <div className="h-3 w-3 rounded-full bg-white" />
                </div>
              </div>
              <div className="space-y-4 p-4">
                <h3 className="text-white">Daily prompts</h3>
                <Skeleton className="h-2 bg-white rounded w-3/4" />
                <Skeleton className="h-2 bg-white rounded w-full" />
                <Skeleton className="h-2 bg-white rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

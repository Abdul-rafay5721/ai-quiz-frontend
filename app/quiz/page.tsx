"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProjectSelection() {
  const router = useRouter();

  const goto = (slug: string) => router.push(`/quiz/${slug}`);

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center gap-8 p-8 bg-gray-100">
      {/* Existing Project Block */}
      <div
        className="w-full md:w-1/2 h-96 bg-white text-gray-900 rounded-xl flex flex-col items-center justify-center p-8 shadow-2xl cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300"
        onClick={() => goto("old")}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2012/04/11/00/06/floppy-disk-27226_1280.png"
          alt="New Project"
          width={50}
          height={50}
          className=""
        />
        <h2 className="text-3xl font-extrabold mt-6">
          Continue with Existing Project
        </h2>
        <p className="mt-3 text-lg text-center">
          Resume work on a project you've already started effortlessly.
        </p>
      </div>

      {/* New Project Block */}
      <div
        className="w-full md:w-1/2 h-96 bg-white text-gray-900 rounded-xl flex flex-col items-center justify-center p-8 shadow-2xl cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-300"
        onClick={() => goto("new")}
      >
        <Image
          src="https://cdn.pixabay.com/photo/2016/07/05/01/07/new-icon-1497910_1280.png"
          alt="Existing Project"
          width={100}
          height={100}
          className=""
        />
        <h2 className="text-3xl font-extrabold mt-6">Start a New Project</h2>
        <p className="mt-3 text-lg text-center">
          Create something new and bring your ideas to life from scratch.
        </p>
      </div>
    </div>
  );
}

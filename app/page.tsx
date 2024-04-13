import Image from "next/image";
import underline from '../public/underline.svg';
import avatar from '../public/avatar.jpeg';
import { formatDistance } from "date-fns";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center">
      <div className="pt-20">
        <div className="max-w-lg lg:max-w-3xl bg-white px-12 py-16 rounded-md shadow-md flex justify-between gap-6">
          <div className="flex flex-col ">
            <h1 className="pb-4 font-semibold tracking-tight text-4xl text-slate-800">
              Coding with{" "}
              <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-600">
                Zak!
                <Image
                  className="absolute left-0 top-[90%] h-[0.58em] w-full "
                  priority
                  src={underline}
                  alt=""
                  height={50}
                  width={50}
                />
              </span>
            </h1>
            <p className="lg:text-lg text-base">
              With {formatDistance(new Date("2019-06-17"), new Date())} years of
              experience working as a professional front end developer this
              channel is dedeicated to helping you to take your next steps on
              your web dev journey.
            </p>
            <button></button>
          </div>
          <div className="w-[86rem] h-72 ">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={avatar}
              alt=""
              height={600}
              width={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

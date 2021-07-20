import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex h-screen w-full bg-gray-700 justify-center items-center">
      <button
        className="p-4 rounded-xl bg-purple-600 font-bold text-gray-200"
        onClick={() => router.push("/app")}
      >
        Go to app
      </button>
    </div>
  );
}

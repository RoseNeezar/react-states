import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      Header
      <button
        className="p-4 rounded-xl bg-purple-600"
        onClick={() => router.push("/app")}
      >
        Go to app
      </button>
      <footer>
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </footer>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div>
      <p> Next Js Todo Application </p>
      <button onClick={() => router.push("/signup")} > signup </button>
      <button onClick={() => router.push("/signin")} > signin </button>
    </div>
  );
}

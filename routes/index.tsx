import { Head } from "$fresh/runtime.ts";
import DigitalClock from "../islands/DigitalClock.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Clock</title>
      </Head>
      <div class="h-screen w-screen grid place-content-center bg-black">
        <DigitalClock />
      </div>
    </>
  );
}

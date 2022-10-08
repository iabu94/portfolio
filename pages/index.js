import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdullah Mansoor - Full Stack Developer</title>
        <meta
          name="description"
          content="Abdullah Mansoor - Full Stack Developer"
        />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <div className="h-screen bg-black text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl">
          Hi, This is <span className="">Abdullah Mansoor</span>.
        </h1>
        <h4 className="text-3xl">This website is under construction.</h4>
        <h4 className="text-2xl">
          You can always catch me on{" "}
          <Link
            href="https://wa.me/+94719994818"
            target="_blank"
            className="text-cyan-700"
          >
            +94719994818
          </Link>
        </h4>
      </div>
    </div>
  );
}

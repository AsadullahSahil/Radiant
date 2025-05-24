import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl bg-red-900">
          Welcome to Radiant
        </h1>
      </main>
    </>
  );
}

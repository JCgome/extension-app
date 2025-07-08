import { ExtensionManager } from "./components/ExtensionManager";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="gradient-light dark:gradient-dark min-h-screen flex flex-col items-center">
      <section className="w-[343px] my-6 md:w-[672px] xl:w-[1170px]">
        <Header />
        <ExtensionManager />
      </section>
    </main>
  );
}

export default App;

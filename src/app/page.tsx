import About from "@/containers/about/About";
import Collection from "@/containers/collection/Collection";
import HeroTop from "@/containers/hero-top/HeroTop";
import Partners from "@/containers/partners/Partners";
import Populars from "@/containers/populars/Populars";

export default function Home() {
  
  return (
    <main >
      <HeroTop/>
      <Collection/>
      <Partners/>
      <Populars/>
      <About/>
    </main>
  )
}

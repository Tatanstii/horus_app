import GenderLink from "./components/GenderLink";
import ManImage from "@public/images/models/man.jpg";
import WomanImage from "@public/images/models/woman.jpg";

export default function Home() {
  const { src: manImageUrl } = ManImage;
  const { src: womanImageUrl } = WomanImage;

  return (
    <section className="h-full w-full my-5">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
        <GenderLink link="/catalog?gender=male" imageUrl={manImageUrl} text="Para hombres" />
        <GenderLink link="/catalog?gender=female" imageUrl={womanImageUrl} text="Para mujeres" />
      </div>
    </section>
  );
}

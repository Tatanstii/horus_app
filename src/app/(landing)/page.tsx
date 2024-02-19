import ManImage from "@public/images/models/man.jpg";
import WomanImage from "@public/images/models/woman.jpg";
import GenderLink from "../components/ui/GenderLink";

const genders = [
  {
    id: 1,
    name: "Hombres",
    imageUrl: ManImage.src,
    link: "/catalog?gender=male"
  },
  {
    id: 2,
    name: "Mujeres",
    imageUrl: WomanImage.src,
    link: "/catalog?gender=female"
  }
]

export default function Home() {

  return (
    <main className="z-10">
      <section className="p-5">
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          {
            genders.map(({ id, imageUrl, link, name }) => (
              <GenderLink key={id} imageUrl={imageUrl} link={link} text={name} />
            ))
          }
        </div>
      </section>
    </main>
  );
}

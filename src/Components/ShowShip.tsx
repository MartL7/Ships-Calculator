import { changeImage } from "../logic/logic"

interface Props {
  namePerson1: string
  namePerson2: string
  porcentage: number
}

export function ShowShip({ namePerson1, namePerson2, porcentage }: Props) {

  const image = changeImage(porcentage, '')
  return (
    <article className="mt-20 flex justify-center items-center">
      <section className="flex flex-col justify-center items-center w-64 md:w-[400px] gap-5 rounded-xl relative p-4">

        <img src={image} alt="Imagen de Goku" className="opacity-15 pointer-events-none absolute size-64" />

        <div>
          <p className="text-2xl text-center font-bold text-blue-300/90"> {namePerson1} y {namePerson2} </p>
          <p className="text-xl text-center font-semibold"> Porcentaje de shippeo: 
            <span className="text-orange-500/90"> {porcentage}% </span> 
          </p>
        </div>
      </section>
    </article>
  )
}
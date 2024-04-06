import { useRef } from "react"
import { ShowShip } from "./ShowShip"
import { Button } from "./Button"
import { useActiveShip } from "../Hooks/activeShip"
import { Toaster } from 'react-hot-toast'

export function Form () {

  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)

  const { isSend, handleClick, namesPerson, porcentage } = useActiveShip({ inputRef1, inputRef2 })
  
  const [namePerson1, namePerson2] = namesPerson

  return (
    <>
      <section className="flex flex-col justify-center items-center">
    
        <aside className="mt-20 flex flex-col justify-center items-center border border-gray-300/90 w-64 md:w-[400px] gap-5 rounded-xl relative p-4">

            <h2 className="text-2xl font-ubuntu-mono font-bold text-center"> Shipeo de Compas </h2>

            <img src="/img/love-img.webp" alt="Imagen de Goku" className="opacity-15 pointer-events-none absolute top-0 size-64" />

            <label htmlFor="" className="text-lg text-center font-semibold">
                Nombre de la primera persona
            </label>

            <input
                ref={inputRef1}
                type="text"
                className="w-48 text-lg px-2 border border-gray-300 rounded-lg"
            />

            <label htmlFor="" className="text-lg text-center font-semibold">
                Nombre de la segunda persona
            </label>

            <input type="text"
                ref={inputRef2}
                className="w-48 text-lg px-2 border border-gray-300 rounded-lg"
             />

            <div
                className="h-[2px] w-full rounded-r-[30%] border-t-0 bg-white"
                style={{background: 'linear-gradient(to left, transparent 3%, white 35%, white 100%)'}}
            >
            </div>

            <Button handleClick={handleClick} />

            <Toaster
              position="bottom-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toastOptions={{
                // Define default options
                className: '',
                duration: 2000,
                style: {
                  background: '#363636',
                  color: '#fff',
                },

                // Default options for specific types
                success: {
                  duration: 1000
                },
              }}
            />

        </aside>
      </section>
      {
        isSend ? 
        <ShowShip namePerson1={namePerson1!} namePerson2={namePerson2!} porcentage={porcentage} /> 
        : null
      }
    </>
  )
}
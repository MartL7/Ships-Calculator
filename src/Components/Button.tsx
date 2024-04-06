export function Button ({ handleClick }: { handleClick: () => void } ){
  return (
    <button className="inline-block skew-x-[-21deg] cursor-pointer border-2 border-primary font-semibold uppercase px-5 py-2.5 before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-primary hover:scale-110 hover:text-secondary hover:before:origin-left hover:before:scale-x-100 aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111] ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out" onClick={handleClick}> 
      <span className="inline-block skew-x-[21deg]"> Shippear </span>
    </button>
  )
}
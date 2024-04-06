import React, { useState } from "react"
import { porcentageRandom } from "../logic/logic"
import toast from 'react-hot-toast'

interface Props {
  inputRef1: React.RefObject<HTMLInputElement>
  inputRef2: React.RefObject<HTMLInputElement>
}

export const useActiveShip = ({ inputRef1, inputRef2 }: Props) => {
  const [isSend, setIsSend] = useState(false)
  const [porcentage, setPorcentage] = useState(0)
  const [namesPerson, setNamesPerson] = useState(['', ''])

  const handleClick = () => {
    const inputValue1 = inputRef1.current?.value
    const inputValue2 = inputRef2.current?.value
    setNamesPerson([inputValue1!, inputValue2!])

    if (inputValue1 === inputValue2) {
      toast.error('No puedes poner el mismo nombre')
      return
    }

    if (inputValue1?.startsWith(' ') || inputValue2?.startsWith(' ')) {
      toast.error('No puedes poner un nombre que empiece con espacio')
      return
    }

    setIsSend(true)
    setPorcentage(porcentageRandom(0))
    toast.success('Shippeados 😏')
  }

  return { namesPerson, handleClick, isSend, porcentage }
}
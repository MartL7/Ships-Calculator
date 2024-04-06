export const porcentageRandom = (number: number) => {
  return (number === 0) ? Math.floor(Math.random() * 101) : Math.floor(Math.random() * 21) - 80
}

export const changeImage = (porcentage: number, image: string) => {
  if (porcentage > 50 && porcentage < 100) {
    image = '/img/love-op.gif'
  } else if (porcentage <= 50) {
    image = '/img/not-love-op.gif'
  } else {
    image = '/img/much-love-op.gif'
  }

  return image
}
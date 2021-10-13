const getIcon = (icon) => {
  const icons = ['https://openweathermap.org/img/wn/', '@2x.png']
  return icons[0] + icon + icons[1]
}

export { getIcon }

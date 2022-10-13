const MenuSVG = ({ scroll }) => {
  return (
    <svg
      style={
        scroll > 42
          ? { opacity: "0.5", fill: "#364954" }
          : { opacity: "1", fill: "#364954" }
      }
      viewBox="0 0 100 80"
      width="40"
      height="40"
      fill="#364954"
    >
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </svg>
  )
}

export default MenuSVG

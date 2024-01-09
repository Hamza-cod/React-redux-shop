import { Link } from "react-router-dom"
import { StyledHeader } from "../styles/StyledHeader"

export const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
      <h1>Redux Shop</h1>
      </Link>
    </StyledHeader>
  )
}


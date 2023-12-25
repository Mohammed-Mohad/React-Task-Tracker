import Button from "./Button"

interface HeaderProps {
    onShow:()=>void;
}


const Header = ({onShow}:HeaderProps) => {
  return (
    <header className="header">
        <h1 >Tasks</h1>
        <Button text="Add" color="green" onClick={onShow} />
    </header>
  )
}

export default Header
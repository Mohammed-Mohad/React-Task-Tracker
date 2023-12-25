interface ButtonProps {
    text:string;
    color:string;
    onClick:()=>void;
}

const Button = ({text,color,onClick}:ButtonProps) => {
  return (
    <div>
      <button className="btn"  style={{backgroundColor:color}} onClick={onClick}>{text}</button>
    </div>
    
    ) 
}

export default Button
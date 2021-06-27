import {evaluate} from "mathjs";

const Button = (props) => {

    const handleClick =(props) => {
        console.log(props)
        if(props.value === '='){
            const result = evaluate(props.expression);
            props.setExpression(result);
            return;
        }
        props.setExpression(props.expression + props.value);
        console.log(props)
    }
    return ( 
    <button className={`button ${props.value === '=' ? 'equal' : ""}`}
       onClick={() =>{ handleClick(props)}} >
        
        
        {props.value}
        </button> 
        );
};
 
export default Button;
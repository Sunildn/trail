import Button from "./Button";

const Keypad = (props) => {
    return ( 
        <div className='keypad'>
            <Button {...props} value={'7'}></Button>
            <Button {...props} value={'8'}></Button>
            <Button {...props} value={'9'}></Button>
            <Button {...props} value={'/'}></Button>
            <Button {...props} value={'4'}></Button>
            <Button {...props} value={'5'}></Button>
            <Button {...props} value={'6'}></Button>
            <Button {...props} value={'*'}></Button>
            <Button {...props} value={'1'}></Button>
            <Button {...props}value={'2'}></Button>
            <Button {...props} value={'3'}></Button>
            <Button {...props} value={'-'}></Button>
            <Button {...props} value={'0'}></Button>
            <Button {...props} value={'.'}></Button>
            <Button {...props} value={'+'}></Button>
            <Button {...props} value={'='}></Button>
        </div>
     );
}
 
export default Keypad;
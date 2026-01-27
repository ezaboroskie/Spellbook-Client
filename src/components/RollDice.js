import React,{Component} from 'react'
import Die from '../components/Die'
import '../styles/RollDice.css'
import '../styles/Home.css'
import Home from '../components/Home'
import { getContrastTextColor } from '../utils/colorUtils'


const logo = require('../images/logo.png')

class RollDice extends Component{
    static defaultProps = {
        sides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
    }

    

    constructor(props){
        super(props)
        const defaultDiceColor = '#dd5523'
        this.state={
            die1:'',
            rolling: false,
            showh1: false,
            diceColor: defaultDiceColor,
            textColor: getContrastTextColor(defaultDiceColor)
        }
        this.roll = this.roll.bind(this)
        this.handleColorChange = this.handleColorChange.bind(this)
    }

    roll(){
        const {sides} = this.props
        this.setState({
            die1 : sides[Math.floor(Math.random() * sides.length)],
            rolling:true,
            showh1:true
        })
        setTimeout(() => {
            this.setState({rolling:false})
        },1000)
        setTimeout(()=>{
            this.setState({showh1:false})
        },1000)
        }

    handleColorChange(event){
        const newColor = event.target.value
        const newTextColor = getContrastTextColor(newColor)
        this.setState({
            diceColor: newColor,
            textColor: newTextColor
        })
    }
    
        


    render(){
        const handleBtn = this.state.rolling ? 
        'RollDice-rolling' : ''
        const {die1, rolling, diceColor, textColor} = this.state


        return(
            <>
            <Home/>

            <img className='logo-center' alt='logo' src={String(logo)} />


            <div className = 'RollDice'>
                <div className = 'RollDice-container'>
                    <Die face = {die1} rolling ={rolling} color={diceColor}/>
                <h1 
                    hidden={this.state.showh1} 
                    className='DisplayNumber'
                    style={{color: textColor}}
                >
                    {die1}
                </h1>          
                </div>
                
                <div className='RollDice-controls'>
                    <label className='color-picker-label'>
                        Dice Color:
                        <input 
                            type="color" 
                            value={diceColor}
                            onChange={this.handleColorChange}
                            className='color-picker'
                        />
                    </label>
                </div>
                
                <button 
                    className = {handleBtn}
                    disabled= {this.state.rolling}
                    onClick = {this.roll}
                    style={rolling ? {
                        backgroundColor: diceColor,
                        color: textColor
                    } : {}}
                >
                    {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
                </button>
                
            </div>
           
            
        
           </>
            
           
            
        
        )
    }
}

export default RollDice

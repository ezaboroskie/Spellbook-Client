import React,{Component} from 'react'
import Die from '../components/Die'
import '../styles/RollDice.css'
import '../styles/Home.css'
import Home from '../components/Home'


const logo = require('../images/logo.png')

class RollDice extends Component{
    static defaultProps = {
        sides: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
    }

    

    constructor(props){
        super(props)
        this.state={
            die1:'',
            rolling: false,
            showh1: false
        }
        this.roll = this.roll.bind(this)
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
    
        


    render(){
        const handleBtn = this.state.rolling ? 
        'RollDice-rolling' : ''
        const {die1,rolling} = this.state


        return(
            <>
            <Home/>

            <img className='logo-center' alt='logo' src={String(logo)} />


            <div className = 'RollDice'>
                <div className = 'RollDice-container'>
                    <Die face = {die1} rolling ={rolling}/>
                <h1 hidden={this.state.showh1} className='DisplayNumber'>{die1}</h1>          
                </div>
                
                <button className = {handleBtn}
                    disabled= {this.state.rolling}
                    onClick = {this.roll}>
                    {this.state.rolling ? 'Rolling' : 'Roll Dice!'}
                </button>
                
            </div>
           
            
        
           </>
            
           
            
        
        )
    }
}

export default RollDice

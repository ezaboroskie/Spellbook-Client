import React, {useState, useEffect} from 'react';
import Home from '../components/Home'
import {connect} from 'react-redux'
import CenterModal from './CenterModal';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Body.css'
import '../styles/Card.css'

const logo = require('../images/logo.png')

function SearchCard(){

    const[searchedCards, setSearchedCards] = useState([])
    const[cardName, setCardName] = useState ('')
    const[modalShow, setModalShow]= React.useState(false)
    const[objCard, setObjCard] = useState({})
    const[matchesS, setMatchesS] = useState(
        window.matchMedia("(max-width:340px)").matches
      )
  
    
    useEffect(()=>{
        window
        .matchMedia("(max-width:340px)")
        .addEventListener('change', e => setMatchesS(e.matches));
        }, [])

    useEffect(()=>{
        fetchSearchCard()
    },[])

    const fetchSearchCard = () =>{

        if (cardName.length==0){return}
        
        fetch(`https://api.scryfall.com/cards/search?q=name=${cardName}`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(searchedCards=>{
            setSearchedCards(searchedCards.data)
            console.log(searchedCards)
        })
    }

    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
        fetchSearchCard()
        }
    }

    const handleAddFav = (imageURL) =>{
        

        const token = localStorage.getItem('jwt')
        const userId = localStorage.getItem('userId')

        fetch('https://the-spellbook-server.onrender.com/add-fav', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({userId:userId, imageURL:imageURL})
        })
        

    }
       
    const handleImgClick=(card)=>{
        setObjCard(card)
        setModalShow(true) 
    }  
  
    const searchedCardItems = searchedCards.map((card,index)=>{
        return <div className='card-container' key={index}>
                    <img variant="primary" onClick={()=>handleImgClick(card)}  className='image-thumb' src={card.image_uris ? card.image_uris.border_crop : card.card_faces[0].image_uris.border_crop}/>
                <button onClick={()=>card.image_uris ? handleAddFav(card.image_uris.border_crop) : handleAddFav(card.card_faces[0].image_uris.border_crop)} className='fav-btn'>Favorite</button>
        
                </div>
                
    })

    return(
        <>
        <Home/>
        
        {matchesS &&(
        <div className='logo-container-small-fav'>
        <img className='logo-center-small-fav' alt='logo' src={String(logo)} />
        </div>
        )}

        {!matchesS &&(
        <div className='logo-container'>
        <img className='logo-center' alt='logo' src={String(logo)} />
        </div>
        )}
       
        <div className='search-bar-container'>
        <input className='search-bar' onKeyDown={handleKeyDown} type = 'text' name= 'cardName' placeholder= 'Enter card name' onChange={(e)=>setCardName (e.target.value)} />
        <button className='search-btn' onClick ={fetchSearchCard}>Search</button>
        </div>
        <div className='thumb-container'>{searchedCardItems}</div>
        {Object.keys(objCard).length>0?<CenterModal cardobj={objCard} image={objCard.image_uris.border_crop}
            show={modalShow}
            onHide={()=>setModalShow(false)}
            /> : ''}
        </>
    )


}

const mapStateToProps = (state)=>{
    return{
        authUser:state.isAuthenticated
    }
}

export default connect(mapStateToProps)(SearchCard)
import { useState,useEffect } from 'react'
import './Topic.scss'
function Topic(){

    const [catPic, setCatPic] = useState()

    async function getCats(){
        return await fetch("https://api.thecatapi.com/v1/images/search")
        .then(response=>response.json())
        .then(response=>{
            console.log(response[0] )
            if (response[0].height < 550){
                setCatPic(response[0].url)
            }else{
                getCats()
            }
    })
        .catch(err=>console.log("Error"))
    }

    useEffect(()=>{
        getCats()
    },[])


    return (
    <>
    <div className="main">
        <div className="topic">If you're feeling sad, here's some cute cat pictures =)
        <button className="button-62" onClick={()=>{getCats()}}><span className="text">CatButton</span></button></div>
        <img src={catPic} alt="" />
    </div>.
    </>)
}
export default Topic
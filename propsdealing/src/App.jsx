//hamara data actually main app component me hoga aur ham use props ke through pass karenge cards me har card pr ek add friend button hoga  and hum add friend button per click hone per alert dena hai
import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Muskan",
      added: false
    },
     {
      image: "https://media.istockphoto.com/id/1983617953/photo/night-cityscape-of-shibuya-tokyo.jpg?s=1024x1024&w=is&k=20&c=W1vhjaf04H9x3YsHipVi7JnO6Du4jHjeGpQ-zUYODuA=",
      name: "One Day",
      artist: "Dev",
      added: false
    },
     {
      image: "https://images.unsplash.com/photo-1750365866509-8e1f1cac473e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kar har maidaan fateh",
      artist: "Arijit Singh",
      added: false
    },
     {
      image: "https://media.istockphoto.com/id/1062511062/photo/tokyo-downtown-ginza-night.jpg?s=1024x1024&w=is&k=20&c=2x-9YFj1-BgsettWk7EANbXCGR5qSh8FSSQEJGJANCY=",
      name: "Apna Bana Le",
      artist: "Armaan Malik",
      added: false
    },
     {
      image: "https://media.istockphoto.com/id/1210158876/photo/shinjuku-city-viii.jpg?s=1024x1024&w=is&k=20&c=HKSuA8RACP4Za2-NlrEo5PvBnf7Cwe702ESjIwO3FKM=",
      name: "Sajni Ve",
      artist: "Rahat Fateh Ali Khan",
      added: false
    },
     {
      image: "https://media.istockphoto.com/id/1359993253/photo/a-night-time-street-scence-from-the-shinjuki-area-of-tokyo.jpg?s=612x612&w=is&k=20&c=FojTDpvwFpO7OOPF2vnO9sfIq90-BmxFpEOrTnVoHbw=",
      name: "Ashquin - 2",
      artist: "Shradha Kapoor",
      added: false
    },
     {
      image: "https://media.istockphoto.com/id/2217180377/photo/vibrant-shinjuku-night-scene-with-godzilla.jpg?s=1024x1024&w=is&k=20&c=Dppj6bDnDxRSZQY_V4CRew5ZbMxaj-JLxOsC1cGl-K4=",
      name: "Chand sifarish",
      artist: "Anil Kapoor",
      added: false
    },
    {
      image: "https://images.unsplash.com/photo-1681057593365-81c8e6f1348f?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Ishq Mubarak",
      artist: "Diljeet Dosanjh",
      added: false
    },
  ]

  const [songData , setSongData] = useState(data);
  const handleClick = (index) => {
     setSongData((prev) => {
      return prev.map((item , itemindex)=>{
        if(itemindex === index){
          return {...item, added: !item.added}
        }
        return item;
      })
     })
  }
  return (
    <>
     <div className="w-full h-screen bg-zinc-300">
      <Navbar  data={songData}/>
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
       {songData.map((obj , index)=>(
        <Card
          name={obj.name} // <-- Important!
          image={obj.image}
          artist={obj.artist}
          added={obj.added}
          handleClick={handleClick} index={index} key={index}
          // onAddFriend={() => alert(`Added successfully ${obj.name}`)} // <-- This handles the button click
        />

       ))}
      </div>
     
     </div>
    </>
  )


}

export default App;

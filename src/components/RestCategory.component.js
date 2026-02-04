import { useState } from "react";
import ItemList from "./itemList.component";

const RestCategory=({data , ShowItems , setShowIndex})=>{
    console.log(data)

   

    const handleClick=()=>{
        setShowIndex()

    }
    return  <div>
        {/**Header */}
        <div className="w-full shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            {ShowItems && <ItemList items={data.itemCards} />}

        </div>


        {/**Accordian body */}

        
    </div>
}

export default RestCategory
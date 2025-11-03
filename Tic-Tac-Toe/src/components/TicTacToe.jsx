import React, { useState } from 'react'
import useCheckerHooks from "../hooks/useCheckerHooks.js"

const TicTacToe = ({ sizeOfBoard = 0 }) => {
  const boardSize = Number(sizeOfBoard); // ensure it's a number
  
  const {checkState,setCheckState,checkWinner}=useCheckerHooks(boardSize)
  const [turn,setTurn]=useState("X")
  const [winner,setWinner]=useState("")

  function handleGameClick(rowidx,colidx){
        setCheckState((prev)=>{
           newState=prev.map(row=>[...row]);
          newState[rowidx][colidx]=turn;
          return newState
        })
         let newState=checkState
         newState[rowidx][colidx]=turn
        if(checkWinner(newState,turn)){
            console.log("winner")
              setWinner(turn);
              return;
        }
        setTurn((prev)=>prev==="X"?"O":"X")

  }

  function handleReset(){
    setCheckState((prev)=>{
        const newState=prev.map((row)=>{
            return row.map((col)=>'')
        })
        return newState
    })
    setTurn("X")
  }
  
  
  return (
    <main className='flex flex-col  items-center justify-center mt-50'>
           <div className="flex justify-between items-center gap-5 m-1  ">
             <h1>{!winner?`Players ${turn} Turn`:`Players ${turn} winner`}</h1>
             <button className=' p-1 bg-amber-500 rounded-2xl cursor-pointer' onClick={handleReset}>Reset Game</button>
           </div>

      <div className="border-collapse   w-auto">
      <table>
        <tbody className="">
           {
            checkState.map((row,rowidx)=>{
                 return <tr key={rowidx}>
                  {
                    row.map((col,colidx)=>{
                      return <td key={colidx} className='border-2 w-10 h-10 text-center cursor-pointer' 
                      onClick={()=>handleGameClick(rowidx,colidx)}
                      >{checkState[rowidx][colidx]}</td>
                    })
                  }

                 </tr>
            })
           }
        </tbody>
      </table>
    </div>
    </main>
  );
};

export default TicTacToe;

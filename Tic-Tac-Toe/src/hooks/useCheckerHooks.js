import { useState } from "react";

const useCheckerHooks = (size = 0) => {
  const checkerArray = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => "")
  );
  const [checkState, setCheckState] = useState(checkerArray);

  function checkWinner(board,turn){
     const size=board.length
    for(let i=0;i<size;i++){
        if(board[i].every(cell=>cell===turn)) return true;
    }

    for(let i=0;i<size;i++){
         let colWin=true;
        for(let j=0;j<size;j++){
           if(board[j][i]!==turn){
            colWin=false;
           }
        }
        if(colWin)return true
    }
    //check for main diagonal
    let mainDiagonalWin = true;
  for (let i = 0; i < size; i++) {
    if (board[i][i] !== turn) {
      mainDiagonalWin = false;
      break;
    }
  }
  if (mainDiagonalWin) return true;

  
   // ---- Check Anti-Diagonal ----
  let antiDiagonalWin = true;
  for (let i = 0; i < size; i++) {
    if (board[i][size - 1 - i] !== turn) {
      antiDiagonalWin = false;
      break;
    }
  }
  if (antiDiagonalWin) return true;
  return false
  }
  return { checkState, setCheckState ,checkWinner};
};

export default useCheckerHooks

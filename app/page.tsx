import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
      <h1 className="text-[50px]">Charts Visualization</h1>
    <nav className="flex justify-center items-center gap-4 flex-wrap">
    
      <Link href='/barchart'><Button sx={{px:4, py:2, backgroundColor:'#036f03', color:'white', borderRadius:'17px'}}>Barchart</Button></Link>
      <Link href='/linechart'><Button sx={{px:4, py:2, backgroundColor:'#036f03', color:'white', borderRadius:'17px'}} >Linechart</Button></Link>
      <Link href='/piechart'><Button sx={{px:4, py:2, backgroundColor:'#036f03', color:'white', borderRadius:'17px'}} >piechart</Button></Link>
      <Link href='/candlestick'><Button sx={{px:4, py:2, backgroundColor:'#036f03', color:'white', borderRadius:'17px'}} >candlestick</Button></Link>
      </nav>
    </div>
  );
}

import { Outlet } from "react-router-dom";

export function DefaultLayout(){
    return (
        <div className='h-screen w-full bg-background flex justify-center items-center'>
          <Outlet />
        </div>
      )
}
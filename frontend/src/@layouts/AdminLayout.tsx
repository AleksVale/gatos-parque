import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";

export function AdminLayout(){
    return (
        <div className=' h-screen bg-background'>
          <Button >Admin</Button>
          <Outlet />
        </div>
      )
}
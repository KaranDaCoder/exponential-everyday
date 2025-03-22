import { redirect } from "next/navigation";
import { auth } from "./auth";
import { db } from "../db/db";


export const validateSession = async() => {
  const user = await auth();
   if (!user || !user.user?.id)
     return redirect('/');
    const userInfo = await db.user.findUnique({where : {id : user.user.id}})
   return {message : userInfo , success : true};
}


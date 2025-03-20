import { redirect } from "next/navigation";
import { auth } from "./auth";
import { db } from "../db/db";


export const validateSession = async() => {
  const user = await auth();
   if (!user || !user.user?.id || user === null || user.user.id === undefined)
     return redirect('/');
    const userInfo = await db.user.findUnique({where : {id : user.user.id}})
   return {user : userInfo , userId : user.user.id};
}
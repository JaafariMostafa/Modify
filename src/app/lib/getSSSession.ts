import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";



export default async function getSSSession(){
    return await getServerSession(authOptions);
}
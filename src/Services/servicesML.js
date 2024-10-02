import instances from "../Config/axios"

export async function getAll(buscar){
       const res = await instances.get(`sites/MLA/search?q=${buscar}`)
    return res.data
}
export async function getId(id){
    const ver = await instances.get(`items/${id}`)
   // console.log(ver)
    return ver.data
}
export async function getCat(){
    const res = await instances.get("sites/MLA/")
 return res
}
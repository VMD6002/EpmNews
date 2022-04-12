import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase"
import CardSkelLoding from "./CardSkelLoding"

const Conts = ({docs}) => {
    const [post, setPost] = useState(docs)
    const [end ,setEnd] = useState(false)
    const loadMore = async ()=>{
        const last  = post[post.length-1]
        const res = await  db.collection('News')
        .orderBy('createdAt','desc')
        .startAfter(last.createdAt)
        .limit(3)
        .get()
        const newblogs = res.docs.map(docSnap=>{
        return {
            ...docSnap.data(),
            createdAt:docSnap.data().createdAt,
            id:docSnap.id
        }
        })
        setPost([...post , ...newblogs])

        if(newblogs.length < 3){
        setEnd(true)
        }
    }
    return ( 
        <div>
            <div>
                {post.length === 0 ?
                    <div className="flex w-full h-screen"><h1 className="mx-auto my-auto text px-4 rounded-lg bg-gray-50 py-1">No Posts Currently</h1></div>
                    :
                   <>
                   {post.map(doc => (
                        <div key="@" className="max-w-4xl mx-auto w-11/12 my-8">
                            <a href={"/post/" + doc.id}>
                                <div className="bg-logo1 rounded-lg shadow-md overflow-hidden">
                                    <div className="flex object-bottom bg-no-repeat w-full h-64 justify-center bg-logo3">
                                        <img src={doc.url} alt="PostImage" className='py-0 my-0 w-full rounded-none'/></div>
                                    <div className="p-5">
                                        <a href="/" className="block mx-1 text-base font-semibold text-gray-200 hover:text-gray-500 hover:underline">{doc.head}</a>
                                        <p className="text-blue-200 mx-1 mt-2 text-xs">Author:  {doc.authr} 
                                        <i className="float-right mt-2 text-xs text-gray-200 hover:text-gray-500"><a href={"/post/" + doc.id}>Learn More</a></i>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                    {end===false?
                        <div onClick={loadMore} className="flex justify-center"><button className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md shadow-lg">Load more</button></div>
                        :
                        <div className="flex text-white max-w-3xl w-11/12 bg-zinc-700 mx-auto rounded-xl shadow-lg justify-center"><h1 className="px-2 py-1">You have reached the end</h1></div> 
                    }
                   </>
                }
            </div>
        </div>
     );
}
 

export default function Contents(){
    const [docs ,setDocs] = useState();
    useEffect(() => {
        const fetchData = async() => {
            const PostSnap = await db.collection("News").orderBy('createdAt', "desc").limit(3).get()
            const Allblogs = PostSnap.docs.map(docSnap=>{
                return{
                    ...docSnap.data(),
                    createdAt: docSnap.data().createdAt,
                    id:docSnap.id
                }})
            setDocs(Allblogs)
          }
        fetchData()
    }, [])

    return (
        <div className="space-y-8">
            {docs ?
                <Conts docs={docs}/>
                :
                <CardSkelLoding />
            }
            <div className="flex w-full bg-logo1"><p className="text-zinc-200 mx-auto py-5 text-xs">Nothing Down here simply here for style</p></div>
        </div>
    )
}
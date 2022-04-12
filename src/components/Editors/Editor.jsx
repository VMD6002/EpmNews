import { useState, useEffect, useMemo } from "react"
import { Link } from "react-router-dom";
import { storage, db, timestamp } from '../Firebase/firebase';
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { BsImageFill, BsFileEarmarkCheckFill } from "react-icons/bs"
import { v4 as uuidv4 } from 'uuid';
import { Helmet } from "react-helmet";
import JoditEditor from "jodit-react";

const Posts = ({post, setds ,image ,setim ,onImageChange ,imag ,cdoc}) => {
    // geting image details with url and deleting it
    async function delImage(url){
      const imageRef = storage.refFromURL(url)
      await imageRef.delete()
    }

    // gteing post dtails from doc id and deleting it
    async function deltForm(e ,url){
      delImage(url)
      await db.collection("News").doc(e).delete();
      setds("Post Deleted Successfully")
      setTimeout(() => {setds("")}, 1500)
    }

    // To change the selected post image
    async function ChangImage(docId ,docUrl){
      if(image){
        const storageRef = storage.ref();
        const docRef = db.collection("News").doc(docId)
        const imageRef = storageRef.child(uuidv4());
        await imageRef.put(image)
        const url = await imageRef.getDownloadURL();
        docRef.update({
          url: url,
        })
        delImage(docUrl)
        setim(false)
        // console.log("it worked, did'nt it?")
      }else;
      // (
      //   // console.log("error")
      // )
    }

  return(
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {post.map(doc => (
        <section className="lg:px-1 md:px-2 lg:mx-0 md:mx-0 sm:mx-5 mx-5"> 
          <div className="grid md:mx-auto my-1 overflow-hidden rounded-lg shadow-lg bg-gray-800">
              <div className="flex object-bottom bg-no-repeat border-gray-800 border-t-8 border-r-4 border-l-4">
                  <div className="w-full bg-gray-700">
                    { imag && doc.id===cdoc ? 
                        <div className="w-full flex"><button className="px-9 bg-green-400 text-sm text-white w-full rounded-t-lg" onClick={() => ChangImage(doc.id ,doc.url)}>Save</button></div>
                      :
                        <label className="flex relative justify-start w-full" >
                          <p className="px-2 py-0.5 text-gray-800 text-xs uppercase cursor-pointer w-full text-center rounded-t-lg" style={{"backgroundColor":"#f2ad6d"}}>Change Image</p>
                          <input id="file-upload" accept="image/x-png,image/jpeg" type="file" className="sr-only" onChange={(e) => onImageChange(e, true, false, doc.id)}/>
                        </label>
                    }
                    <div className="flex w-full justify-center"><img src={doc.url} alt="PostImage" className='object-cover my-0 py-0 rounded-none lg:w-full h-56 md:w-full sm:h-64 md:h-48 lg:h-40'/></div>
                  </div>
              </div>
              <div className="py-5 px-4">
              <span href="#" className="block text-xl font-bold text-white mb-1 text-center">{doc.head}</span>
                <div className="flex flex-row justify-between w-full">
                  <Link to={`/UpdatePost/${doc.id}`} className="flex px-2 py-2 rounded-full bg-blue-300 text-black mb-1 mt-5 justify-center"><FaEdit size="18px"/></Link>
                  <span className="mt-8 text-xs text-gray-200">Written by &apos;{doc.authr}&apos;</span>
                  <button type="submit" className="flex px-2 py-2 rounded-full bg-red-300 text-black mb-1 mt-5 justify-center" onClick={(e) => {e.preventDefault(); deltForm(doc.id, doc.url)}}><TiDelete size="20px" /></button>
                </div>
              </div>
          </div>           
        </section>    
      ))}
    </div>
  )
}

const config = {
  readonly: false, 
  height: "600px",
  allowResizeY: true,
  zIndex: 0,
  buttons: [
    'source', '|',
    'bold',
    'strikethrough',
    'underline',
    'italic', '|',
    'ul',
    'ol', '|',
    'font',
    'fontsize',
    'brush',
    'paragraph', '|',
    'image',
    'video',
    'link', '|',
    'align', 'undo', 'redo', '|',
    'hr',
    'fullsize',
  ],
  buttonsMD: [
    'source', '|',
    'paragraph','bold','italic','strikethrough','underline','|',
    'image','video','link', '|',
    'brush','font', '|',
    'align','hr', '|',
    'undo', 'redo', '|',
    'eraser',
    'dots'
  ],
}

export default function Editor() {
    // data points //

    // for posting
    const [post, setPost] = useState([])
    const [head ,setHead] = useState("")
    const [cont ,setCont] = useState("Contents here")
    const [autho ,setAutho] = useState("")
    const [ImageDes, setImagedes] = useState("")
    const [Tag ,setTag] = useState({
      ae: false,
      hlth: false,
      in: false,
      kl: false,
      kwa: false,
      omn: false,
      qt: false,
      sa: false,
      spo: false,
      wor: false
    })

    useEffect(() => {
      const fetchData = async() => {
        db.collection("News").orderBy('createdAt', "desc").limit(3)
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          }); 
          setPost(documents)
        })
      }
      fetchData()
    }, [])

    const [end,setEnd] = useState(false)
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
          id:docSnap.id
        }
      })
      setPost([...post , ...newblogs])
      console.log(newblogs)
      console.log(last.createdAt)
      if(newblogs.length < 3){
        setEnd(true)
      }
    }
    // get selected image from local storage
    const [image, setImage] = useState(null);

    // for setting messages on state changes
    const [cdoc ,setCdoc] = useState(null)
    const [error, setError] = useState(null);
    const [mess ,setMess] = useState("")
    const [imagup ,setimup] = useState("Upload Image")
    const [load ,setload] = useState(false)
    const [Imag ,setTim] = useState(false)
    const [ds ,setds] = useState("") // post delet 
    const [imag ,setim] = useState(false)
    // functions //
    // saving the image value for later use
    async function onImageChange(e ,im ,Im ,docID){
      const reader = new FileReader();
      let file = e.target.files[0];
      if (file && Im) {
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(file);
            setimup("Uploaded Successfuly,Click to Change Image")
            setTim(true)
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }else if (file && im) {
        reader.onload = () => {
          if (reader.readyState === 2) {
            setImage(file);
            setCdoc(docID)
            setim(true)
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }else {
        setImage(null);
      }
    };


    // Createing a new post 
    async function uploadToFirebase(e){
      e.preventDefault();
     if(image && cont && head && autho){
       setload(true)
       const storageRef = storage.ref();
       const dbref = db.collection("News")
       const imageRef = storageRef.child(uuidv4());
       await imageRef.put(image)
       const url = await imageRef.getDownloadURL();
       const createdAt = timestamp();
       dbref.add({
         url: url,
         imagedes:ImageDes,
         createdAt: createdAt,
         head: head,
         cont: cont,
         authr: autho,
         ...Tag
       })
       setimup("Upload Image")
       setMess("Posted Succesfully")
       setCont("Contents here")
       setTag({
        ae: false,
        hlth: false,
        in: false,
        kl: false,
        kwa: false,
        omn: false,
        qt: false,
        sa: false,
        spo: false,
        wor: false
       })
       setError("")
       setImagedes("")
       setHead("")
       setAutho("")
       setTimeout(() => {setMess("")}, 1500)
     }else{
       setMess("")
       setError("Pls Check if every thing is filled");
       setTimeout(() => {setError("")}, 1500)
     }
      setload(false)
      // console.log(Tag)
    };

    // details for the tags
    const [Dropd] = useState([
      {name: "World",col:"gray-200",key: "wor"},
      {name: "India",col:"yellow-200",key: "in"},
      {name: "kerala",col:"gray-200",key: "kl"},
      {name: "Sports",col:"gray-200",key: "spo"},
      {name: "Saudi",col:"red-200",key: "sa"},
      {name: "UAE",col:"blue-200",key: "ae"},
      {name: "Oman",col:"gray-200",key: "omn"},
      {name: "Qatar",col:"gray-200",key: "qt"},
      {name: "Kuwait",col:"gray-200",key: "kwa"},
      {name: "Health",col:"gray-200",key: "hlth"},
    ])

    return (
      <>
      <Helmet>
        <title>EPM News Editor</title>
        <meta name="title" content="Editor" />
        <meta name="description" content="Editor / Update / Delete" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English Malayalam" />
      </Helmet>
      <div className="h-full flex bg-logo2">
         <div className="max-w-4xl mx-auto my-8">
          <div className="grid gap-6 flex-grow">
            <div className="px-4 lg
            :px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">News Posting</h3>
              <p className="mt-1 text-sm text-gray-600">
                  Please complete all the colums before posting
              </p>
            </div>
            <form className="w-screen sm:max-w-4xl mx-auto" onSubmit={(e) => {uploadToFirebase(e);}}>
                <div className="shadow rounded-md overflow-hidden">
                  <div className="px-4 py-5 bg-white space-y-3 p-6">
                  <div>
                      <h3 className="block text-sm font-medium text-gray-700">Cover photo</h3>
                      <div className="mt-1 justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-2 text-center py-3">
                          <div className="flex justify-center align-middle">
                            { Imag ? 
                              <BsFileEarmarkCheckFill size="2.8rem" color="gray"/>
                              :
                              <BsImageFill size="3rem" />
                            }
                          </div>
                          <div className="flex text-sm text-gray-600">
                            <label
                              className="mx-auto relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span>{imagup}</span>
                              <input id="file-upload" accept="image/x-png,image/jpeg" type="file" className="sr-only" onChange={(e) => {onImageChange(e, false, true);}} />
                            </label>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                    <input
                     type="text"
                     className="shadow-sm text-xs focus:ring-indigo-500 focus:border-indigo-500 block w-5/12 mx-auto border border-gray-300 rounded-lg px-2 py-1"
                     placeholder="Image Description"
                     value={ImageDes}
                     onChange={(e) => setImagedes(e.target.value)}
                    />
                    <div>
                    <div className="mt-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Heading
                        </label>
                        <input
                          type="text"
                          className="shadow-sm text-lg focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full border border-gray-300 rounded-lg p-4"
                          placeholder="Heading"
                          value={head}
                          onChange={(e) => setHead(e.target.value)}
                        />
                    </div>
                      <label className="block text-sm font-medium text-gray-700 mt-4">
                        Contents
                      </label>
                      {useMemo(
                        () => (
                          <div className="mt-1 prose prose-emerald max-w-none">
                            <JoditEditor
                              value={cont}
                              config={config}
                              tabIndex={1} // tabIndex of textarea
                              onBlur={newContent => setCont(newContent)}
                            />
                          </div>
                        ),
                        [cont]
                      )}
                      <div className="mt-3 lg:float-right md:float-right sm:float-none">
                        <h1 className="block text-sm font-medium text-gray-700">
                          Author
                        </h1>
                        <input
                          type="text"
                          className="inline-block shadow-sm text-xs focus:ring-indigo-500 focus:border-indigo-500 mt-1 border border-gray-300 rounded-lg p-2"
                          placeholder="Example = Jhone doe"
                          value={autho}
                          onChange={(e) => setAutho(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <h1 className="block bg-white text-sm font-medium text-gray-700 pl-5 lg:py-5 md:py-4 sm:py-0">
                    Tags
                  </h1>
                  <div className="pr-5 grid grid-cols-3 lg:grid-cols-5 md:grid-cols-5 bg-white">
                    {Dropd.map((det) => (
                      <div key={det.key} className="mx-1">
                        <div className={`block w-full px-1 bg-${det.col} py-2 my-1 mx-3 rounded-lg`}>
                          <input
                            type="checkbox"
                            name={det.key}
                            checked={Tag[det.key]}
                            onChange={(e) => {
                              setTag({
                                ...Tag,
                                [e.target.name]: e.target.checked
                              })
                            }}
                            className="focus:ring-indigo-500 h-3 w-4 text-indigo-600 border-gray-300"
                          />
                          <label className="mx-2">{det.name}</label>
                        </div> 
                      </div>             
                      ))} 
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      disabled={load}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                  { error && <div className="flex px-4 bg-red-400 sm:px-6 text-white justify-center py-4">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white" className="inline-block mr-2"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <b>{error}</b>
                  </div>}
                  { mess && <div className="flex px-4 bg-green-400 sm:px-6 text-white justify-center py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>
                    <b>{mess}</b>
                  </div>}
                  { ds && <div className="flex px-4 bg-yellow-200 sm:px-6 justify-center py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg>
                    <b>{ds}</b>
                  </div>}
                </div>
              </form>
              {post.length === 0 ?
                <div className="flex mx-auto">No posts</div>
                :
                <Posts 
                  post={post}
                  setds={setds} 
                  image={image} 
                  setim={setim} 
                  onImageChange={onImageChange} 
                  imag={imag} 
                  cdoc={cdoc}
                />
              }
              {end===false?
                <div onClick={() => loadMore()} className="flex justify-center"><button className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md shadow-lg">Load more</button></div>
                  :
                <div className="flex text-white max-w-3xl w-11/12 bg-zinc-700 mx-auto rounded-xl shadow-lg justify-center"><h1 className="px-2 py-1">You have reached the end</h1></div> 
              }
            </div>
          </div>
      </div>
      <div className="flex w-full bg-logo1"><p className="text-zinc-200 mx-auto py-5 text-xs">Nothing Down here simply here for style</p></div>
      </>
    )
  }
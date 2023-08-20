import Head from "next/head";
import Link from "next/link";
import { db } from "../Firebase/firebase";
import { useState, useEffect } from "react";
import { Bl } from "../components/blogLayout/BComp";
import { Sbl } from "../components/blogLayout/BComp";
import { Lodbl, LodSbl } from "../components/blogLayout/SkelComp";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  startAfter,
  collection,
  query,
  limit,
  orderBy,
  getDocs,
} from "@firebase/firestore";

export default function Home({ Allblogs }) {
  useEffect(() => {
    if (blogs.length !== 0) {
      loadMore(2);
      if (window.innerWidth > 1023) {
        SideData(3);
      } else setsid(false);
    }
  }, []);

  const SideData = async (num) => {
    const q = query(
      collection(db, "News"),
      orderBy("createdAt", "desc"),
      limit(num)
    );
    const PostSnap = await getDocs(q);
    const Sblogs = PostSnap.docs.map((docSnap) => {
      return {
        head: docSnap.data().head,
        url: docSnap.data().url,
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id,
      };
    });
    setSblogs(Sblogs);
  };
  const [sid, setsid] = useState(true);
  const [SideBlogs, setSblogs] = useState();
  const [blogs, setblogs] = useState(Allblogs);
  const [end, setEnd] = useState(false);
  const loadMore = async (val) => {
    const last = blogs[blogs.length - 1];
    const q = query(
      collection(db, "News"),
      orderBy("createdAt", "desc"),
      startAfter(new Date(last.createdAt)),
      limit(val)
    );
    const res = await getDocs(q);
    const newblogs = res.docs.map((docSnap) => {
      return {
        head: docSnap.data().head,
        url: docSnap.data().url,
        createdAt: docSnap.data().createdAt.toMillis(),
        id: docSnap.id,
      };
    });
    setblogs([...blogs, ...newblogs]);
    if (newblogs.length < val) {
      setEnd(true);
    }
  };

  return (
    <div className="flex flex-col h-full py-5 mt-0 bg-logo2">
      <Head>
        <title>Epm News</title>
        <meta
          name="description"
          content="The best Indian GCC website to get up to date news"
        />
      </Head>
      <div className="flex flex-col mx-auto lg:flex-row max-w-7xl">
        <div>
          <h1 className="text-4xl font-semiblod text-stone-800 lg:text-5xl px-11">
            All news
          </h1>
          <div className="w-11/12 mx-auto my-8">
            <Link href={`/post/${blogs[0].id}`}>
              <a>
                <div className="overflow-hidden rounded-lg shadow-md bg-logo3">
                  <div className="flex object-bottom bg-no-repeat min-h-[16rem]  max-h-96 justify-center mx-auto">
                    <img src={blogs[0].url} alt="PostImage" className="MImg" />
                  </div>
                  <div className="p-5 bg-gray-200">
                    <span className="block mx-1 text-base font-semibold text-logo1 hover:text-gray-500 hover:underline">
                      {blogs[0].head}
                    </span>
                    <p className="mx-1 mt-2 text-xs text-blue-900">
                      Author: {blogs[0].authr}
                      <i className="float-right mt-2 text-xs text-logo1 hover:text-gray-500">
                        <span>Learn More</span>
                      </i>
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <InfiniteScroll
            dataLength={blogs.slice(1).length}
            next={() => loadMore(2)}
            hasMore={!end}
            loader={
              <div className="grid md:grid-cols-1 lg:grid-cols-2">
                <Lodbl />
                <Lodbl />
              </div>
            }
            endMessage={
              <div className="flex justify-center w-11/12 max-w-3xl mx-auto text-white shadow-lg bg-zinc-700 rounded-xl">
                <h1 className="px-2 py-1">You have reached the end</h1>
              </div>
            }
          >
            <div className="grid md:grid-cols-1 lg:grid-cols-2">
              {blogs.slice(1).map((doc) => (
                <>
                  <Bl
                    id={doc.id}
                    imgurl={doc.url}
                    head={doc.head}
                    authr={doc.authr}
                  />
                </>
              ))}
            </div>
          </InfiniteScroll>
          {/* {anim ? (
              <>
                <Lodbl />
                <Lodbl />
              </>
            ) : (
              <></>
            )} */}
          {/* {end === false ? (
            <div onClick={() => loadMore(2)} className="flex justify-center">
              <button
                className={
                  `px-2 py-1 rounded-md shadow-lg ` +
                  (anim
                    ? "animate-pulse bg-gray-200 text-gray-700"
                    : "bg-gray-700 text-gray-200")
                }
                disabled={anim}
              >
                Load more
              </button>
            </div>
          ) : (
            <div className="flex justify-center w-11/12 max-w-3xl mx-auto text-white shadow-lg bg-zinc-700 rounded-xl">
              <h1 className="px-2 py-1">You have reached the end</h1>
            </div>
          )} */}
        </div>
        <div className="">
          {sid ? (
            <>
              <h1 className="pt-10 text-3xl text-center">Latest</h1>
              {SideBlogs ? (
                <>
                  {SideBlogs.map((doc) => (
                    <>
                      <Sbl id={doc.id} imgurl={doc.url} head={doc.head} />
                    </>
                  ))}
                </>
              ) : (
                <>
                  <LodSbl />
                  <LodSbl />
                  <LodSbl />
                </>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const q = query(
    collection(db, "News"),
    orderBy("createdAt", "desc"),
    limit(3)
  );
  const PostSnap = await getDocs(q);
  const Allblogs = PostSnap.docs.map((docSnap) => {
    return {
      head: docSnap.data().head,
      authr: docSnap.data().authr,
      url: docSnap.data().url,
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id,
    };
  });
  return {
    props: { Allblogs },
  };
}

import Head from "next/head";
import Link from "next/link";
import { db } from "../../Firebase/firebase";
import { useState, useEffect } from "react";
import { Bl } from "../../components/blogLayout/BComp";
import { Sbl } from "../../components/blogLayout/BComp";
import { Lodbl, LodSbl } from "../../components/blogLayout/SkelComp";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  startAfter,
  collection,
  query,
  limit,
  orderBy,
  where,
  getDocs,
} from "@firebase/firestore";

export default function Home({ Allblogs, filt }) {
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
        authr: docSnap.data().authr,
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
      where(filt, "==", true),
      limit(val)
    );
    const PostSnap = await getDocs(q);
    const newblogs = PostSnap.docs.map((docSnap) => {
      return {
        head: docSnap.data().head,
        authr: docSnap.data().authr,
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
  const data = {
    ae: "Dubai",
    hlth: "Health",
    in: "India",
    kl: "Kerala",
    kwa: "Kuwait",
    omn: "Oman",
    qt: "Qatar",
    sa: "Saudi",
    spo: "Sports",
    wor: "World",
    gcc: "Gulf",
  };
  return (
    <div className="bg-logo2 mt-0 py-5 h-full grid place-items-center">
      <Head>
        <title>Epm News {data[filt]}</title>
        <meta
          name="description"
          content="The best Indian GCC website to get up to date news"
        />
      </Head>
      <div className="grid max-w-7xl">
        <div className="">
          <h1 className="font-semiblod text-4xl text-stone-800 lg:text-5xl px-11">
            {data[filt]} News
          </h1>
          {blogs.length !== 0 ? (
            <div className="flex flex-col lg:flex-row mx-auto max-w-7xl">
              <div>
                <div className="mx-auto w-11/12 my-8">
                  <Link href={`/post/${blogs[0].id}`}>
                    <a>
                      <div className="rounded-lg shadow-md overflow-hidden bg-logo3">
                        <div className="flex object-bottom bg-no-repeat min-h-[16rem]  max-h-96 justify-center mx-auto">
                          <img
                            src={blogs[0].url}
                            alt="PostImage"
                            className="MImg"
                          />
                        </div>
                        <div className="p-5 bg-gray-200">
                          <span className="block mx-1 text-base font-semibold text-logo1  hover:text-gray-500 hover:underline">
                            {blogs[0].head}
                          </span>
                          <p className="text-blue-900 mx-1 mt-2 text-xs">
                            Author: {blogs[0].authr}
                            <i className="float-right mt-2 text-xs text-logo1  hover:text-gray-500">
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
                    <div className="flex text-white max-w-3xl w-11/12 bg-zinc-700 mx-auto rounded-xl shadow-lg justify-center">
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
              </div>
              <div className="">
                {sid ? (
                  <div className="invisible lg:visible">
                    <h1 className="text-3xl text-center pt-10">Latest</h1>
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
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ) : (
            <div className="h-screen grid place-items-center">
              <div className="grid bg-orange-100 py-2 px-3 rounded-lg">
                <span className="text-center">
                  No News has been posted on the topic {data[filt]}
                </span>
                <Link href="/">
                  <a className="text-center p-4 bg-orange-200 m-2">
                    Go back to Main page
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { filt } = context.query;
  const q = query(
    collection(db, "News"),
    orderBy("createdAt", "desc"),
    where(filt, "==", true),
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
    props: { Allblogs, filt },
  };
}

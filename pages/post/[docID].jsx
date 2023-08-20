import { db } from "../../Firebase/firebase";
import Head from "next/head";
import { doc , getDoc } from "@firebase/firestore";

export default function Post({ cast }) {
  return (
    <div>
      <Head>
        <title>{cast.head}</title>
        <meta property="og:title" content={cast.head} key="otitle" />
        <meta property="og:type" content="News Article" key="otype" />
        <meta property="og:image" content={cast.url} key="oimage" />
      </Head>
      <div className="py-8" key="@">
        <div className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-md bg-logo3">
          <div className="flex object-bottom bg-no-repeat w-fit mx-auto justify-center">
            <img src={cast.url} alt="@" className="MImg" />
          </div>
          {cast.imagedes && (
            <p className="block font-semibold text-white text-xs py-1 px-10 bg-zinc-700 text-center">
              {cast.imagedes}
            </p>
          )}
          <div className="py-5 px-5 bg-white">
            <h1 className="block font-semibold text-logo1 md:text-3xl text-2xl">
              {cast.head}
            </h1>
          </div>
          <div className="flex w-full text-right text-[11px] bg-white pt-2">
            <span className="text-slate-600 ml-5">
              {cast.createdAt} / {cast.authr}
            </span>
          </div>
          <div className="pb-5 px-5 bg-white">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: cast.cont }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { docID } = context.query;
  const docRef = doc(db, "News", docID);
  const docSnap = await getDoc(docRef);
  const d = new Date(docSnap.data().createdAt.toMillis());
  const date = d.toDateString();
  const cast = {
    ...docSnap.data(),
    createdAt: date,
    id: docSnap.id,
  };
  return {
    props: { cast },
  };
}

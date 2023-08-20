import { Feed } from "feed";
import { db } from "../Firebase/firebase";

const hostUrl = "https://www.epmnews.in";

const buildFeed = (items) => {
  const feed = new Feed({
    id: hostUrl,
    link: hostUrl,
    title: "epmnews",
    description:
      "EPM is your news, entertainment, Travel website. We provide you with the latest breaking news and videos straight from the entertainment industry.",
    copyright: "These are mine, but you're welcome to share them.",
    updated: new Date(items[0].date),
    author: {
      name: "News desk",
      link: hostUrl,
    },
  });

  items.forEach((item) => {
    feed.addItem({
      title: item.title,
      link: `${hostUrl}/post/${item.slug}`,
      description: item.summary,
      date: new Date(item.date),
      
    });
  });

  return feed;
};

export const getServerSideProps = async (context) => {
  if (context && context.res) {
    const { res } = context;

    const PostSnap = await db
      .collection("News")
      .orderBy("createdAt", "desc")
      .get();
    const Allblogs = PostSnap.docs.map((docSnap) => {
      const res = docSnap.data().cont;
      const short = res.substring(4, 300);
      return {
        slug: docSnap.id,
        title: docSnap.data().head,
        summary: short,
        date: docSnap.data().createdAt.toMillis(),
      };
    });

    const feed = buildFeed(Allblogs);
    res.setHeader("content-type", "text/xml");
    res.write(feed.rss2()); // NOTE: You can also use feed.atom1() or feed.json1() for other feed formats
    res.end();
  }

  return {
    props: {},
  };
};

const RssPage = () => null;

export default RssPage;

import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import Card from "../components/Card";
import { clearVideos } from "../store";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={900}
          >

            <div className="grid grid-cols-4 p-8 gap-y-[120px] gap-x-5">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
           
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
    </div>
    </div>
  );
}

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
import SidebarMobileFull from "../components/SidebarMobileFull";

export default function Home() {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const isToggled = useAppSelector((state) => state.toggleSidebar.isToggled);

  useEffect(() => {
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      {isToggled ? <SidebarMobileFull /> : null}
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {!isToggled ? (
          <>
            {videos.length ? (
              <InfiniteScroll
                dataLength={videos.length}
                next={() => dispatch(getHomePageVideos(true))}
                hasMore={videos.length < 500}
                loader={<Spinner />}
                height={900}
              >
                <LoadVideos videos={videos} />
              </InfiniteScroll>
            ) : (
              <Spinner />
            )}
          </>
        ) : <LoadVideos videos={videos} />}
      </div>
    </div>
  );
}

function LoadVideos({ videos }: any) {
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 p-8 2xl:gap-y-[120px] lg:gap-y-[80px] lg:gap-x-5 gap-x-7 ">
      {videos.map((item: HomePageVideos) => {
        return <Card data={item} key={item.videoId} />;
      })}
    </div>
  );
}

import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import Card from "../components/Card";
import { clearVideos } from "../store";
import SidebarMobileFull from "../components/Sidebar/SidebarMobileFull";

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
        <div className="md:block hidden">
          <Sidebar />
        </div>
        <div className="flex-1 h-[92.5vh]">
          {videos.length ? (
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getHomePageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={window.innerHeight * 0.95}
            >
              <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 p-8 sm:gap-y-[25px] lg:gap-x-5 gap-x-7 justify-center">
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
    </div>
  );
}

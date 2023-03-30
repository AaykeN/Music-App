import {
  useGetNewMusicQuery,
  useGetPlaylistQuery,
} from "../redux/services/service";
import photo from "../assets/img/header_photo.png";
import groupPhoto from "../assets/img/group-photo.png";
import TopChart from "../components/TopChart";
import { Link } from "react-router-dom";
import NewRelease from "../components/NewRelease";

const CurratedPlaylist = () => {
  return (
    // <section className="flex flex-col lg:flex-row gap-10 px-7 py-7 flex-1 h-[530px] ">
    <div className="bg-[#609EAF] md:w-[100%] lg:w-[60%] rounded-[40px] relative">
      <div className=" flex h-[100%] gap-8">
        {/* Info */}
        <div className="flex-1 text-white flex flex-col justify-between p-10">
          <h4 className="text-lg font-normal">Currated Playlist</h4>

          <div className="max-w-sm">
            <h1 className="text-4xl font-bold mb-2">R & B Hits</h1>
            <p className="text-lg font-light ">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>

          <div className="flex gap-3">
            <img src={groupPhoto} alt="" />
            <p>33k Likes</p>
          </div>
        </div>

        {/* Pic */}
        <div className="relative flex-1">
          <img
            src={photo}
            alt="guy-singing"
            className="h-[403px] absolute bottom-0 right-12"
          />
        </div>
      </div>
    </div>
    // </section>
  );
};
// const { data, isFetching, error } = useGetNewMusicQuery();

const Home = () => {
  return (
    <div className="px-7 py-7">
      <section className="flex flex-col lg:flex-row gap-10 flex-1 h-fit ">
        <CurratedPlaylist />
        <TopChart />
      </section>

      <section>
        <NewRelease />
      </section>
    </div>
  );
};

export default Home;

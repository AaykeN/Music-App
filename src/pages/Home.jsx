import {
  useGetNewMusicQuery,
  useGetPopularMusicQuery,
} from "../redux/services/service";
import photo from "../assets/img/header_photo.png";
import groupPhoto from "../assets/img/group-photo.png";
import TopChart from "../components/TopChart";
import NewRelease from "../components/NewRelease";
import { BsFillHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CurratedPlaylist = () => {
  return (
    <div className="bg-[#609EAF] md:w-[100%] lg:w-[60%] rounded-[40px] relative h-[450px]">
      <div className=" flex h-[100%] gap-8">
        {/* Info */}
        <div className="flex-1 text-white flex flex-col justify-between p-10">
          <h4 className="text-base font-normal">Currated Playlist</h4>

          <div className="max-w-sm">
            <h1 className="text-4xl font-bold mb-2">R & B Hits</h1>
            <p className="text-lg font-light ">
              All mine, Lie again, Petty call me everyday, Out of time, No love,
              Bad habit, and so much more
            </p>
          </div>

          <div className="flex gap-3 justify-start text-center ">
            <img src={groupPhoto} alt="users" />
            <div className="flex gap-2 items-center justify-center">
              <BsFillHeartFill className="w-4 h-4" />
              <p>33k Likes</p>
            </div>
          </div>
        </div>

        {/* Pic */}
        <div className="relative hidden lg:block lg:flex-1">
          <img
            src={photo}
            alt="guy-singing"
            className="h-[403px] absolute bottom-0 right-12"
          />
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const { activeSong, isPlaying } = useSelector(
    (state) => state.persisted.player
  );

  return (
    <div className="px-7 container-padding">
      <section className="flex flex-col lg:flex-row gap-10 flex-1 ">
        <CurratedPlaylist />
        <TopChart />
      </section>

      <section>
        <NewRelease
          useQueryHook={useGetNewMusicQuery}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
        <NewRelease
          useQueryHook={useGetPopularMusicQuery}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
      </section>
    </div>
  );
};

export default Home;

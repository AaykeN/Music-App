import {
  useGetNewMusicQuery,
  useGetPopularMusicQuery,
} from "../redux/services/service";
import photo from "../assets/img/header_photo2.png";
import stringBackground from "../assets/img/stringBackground.svg";
import groupPhoto from "../assets/img/group-photo.png";
import TopChart from "../components/TopChart";
import NewRelease from "../components/NewRelease";
import { BsFillHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const CurratedPlaylist = () => {
  return (
    <div className="bg-[#609EAF] md:w-[100%] lg:w-[60%] rounded-[40px] relative h-[600px] md:h-[450px] lg:h-[430px] xl:h-[450px] overflow-hidden">
      <div className=" flex h-[100%] gap-8">
        {/* Info */}
        <div className="flex-1 text-white flex flex-col justify-between p-10">
          <h4 className="text-base font-normal">Currated Playlist</h4>

          <div className="h-[38%] md:h-[65%] flex flex-col justify-between">
            <div className="max-w-sm mb-5">
              <h1 className="text-4xl font-bold mb-2">R & B Hits</h1>
              <p className="text-base lg:text-base xl:text-lg font-light">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </div>

            <div className="flex gap-3 justify-start text-center items-center">
              <img
                src={groupPhoto}
                alt="users"
                className="h-7 xs:h-9 md:h-6 w-auto object-fill"
              />
              <div className="flex gap-3 items-center justify-center">
                <BsFillHeartFill className="w-4 xs:w-6 h-auto md:w-5 xs:mx-2 md:mx-0" />
                <p className="text-sm xs:text-2xl md:text-base">33k Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pic */}
        <div className="relative hidden md:block md:flex-1">
          <img
            src={photo}
            alt="guy-singing"
            className="absolute bottom-0 right-12 lg:right-7 xl:right-12 z-[2] min-w-[300px] lg:min-w-[270px] xl:min-w-auto object-contain object"
          />
        </div>
        <img
          src={stringBackground}
          alt="string-background"
          className="absolute -right-[5rem] md:right-0 z-[1]  h-[100%] w-[350px] md:w-[700px] -top-[16rem] md:top-0 md:rotate-0 rotate-[85deg]"
        />
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

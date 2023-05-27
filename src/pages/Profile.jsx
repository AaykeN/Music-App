import React from "react";

const Profile = () => {
  return (
    <div className="container-padding">
      <div className="text-white text-xl">Profile</div>
      <div className="flex w-full text-2xl text-white justify-center items-center h-[50vh]">
        <p>
          Built By{"  "}
          <a href="https://arnond.com/" target="_blank" className="underline">
            Arnond
          </a>
          👋🏻
        </p>
      </div>
    </div>
  );
};

export default Profile;

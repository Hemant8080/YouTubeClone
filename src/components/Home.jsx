import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./ListItem";

function Home() {
  const { data, loading } = useAuth();

  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <ListItems />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-5">
          {!loading &&
            data.map((item, index) => {
              if (item.type != "video") return false;
              return <Video key={index} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;

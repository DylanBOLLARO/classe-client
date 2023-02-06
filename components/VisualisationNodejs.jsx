import Link from "next/link";
import React, { useState } from "react";
const axios = require("axios").default;

const VisualisationClient = () => {
  const [userNodeJs, setUserNodeJs] = useState([]);

  return (
    <div className="flex  flex-1 flex-col p-5 gap-2 bg-zinc-800 rounded-lg border-2 border-zinc-700 hover:border-indigo-600/75 duration-75">
      <p>Rechercher par NodeJs</p>
      <div className="flex flex-row gap-1">
        <input
          type="text"
          placeholder="Search"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600 w-full"
          onChange={(e) => {
            console.log("Recherche d'un utilisateur par avec NodeJs");
            e.target.value
              ? axios
                  .get(`http://localhost:8080/search/${e.target.value}`)
                  .then(function (response) {
                    setUserNodeJs(response.data);
                  })
              : setUserNodeJs([]);
          }}
        />
      </div>

      <h3 className="text-center text-xl">Liste d'étudiants NodeJs</h3>
      <div className="flex flex-wrap gap-1">
        {userNodeJs.map((x) => (
          <div
            key={x._id}
            className="border-2 border-zinc-700 rounded px-2 outline-none bg-zinc-900 hover:border-2 hover:border-indigo-600"
          >
            <Link href={`/${x._id}`}>
              <div key={x._id}>
                <p>{x.nom}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualisationClient;

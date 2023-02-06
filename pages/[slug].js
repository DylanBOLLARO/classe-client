import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const axios = require("axios").default;
import { useState, useEffect } from "react";

const NoPageFound = () => {
  const [user, setUser] = useState([]);
  const { query } = useRouter();
  const { slug } = query;
  const ID = user.find((x) => x._id == slug);

  useEffect(() => {
    axios.get("http://localhost:8080/").then(function (response) {
      setUser(response.data);
    });
  }, []);

  if (!ID) {
    return <>Cette personne n'existe pas</>;
  }

  return (
    <div className="p-3">
      <div className="border-2 border-zinc-700 rounded-lg outline-none bg-zinc-900 hover:border-2 hover:border-indigo-600 w-fit hover:scale-105 duration-75">
        <Link href={"/"}>
          <p className="px-5 py-1">back</p>
        </Link>
      </div>

      <div className="flex flex-row gap-5 p-5 justify-center">
        <Image
          src={"/avatar.png"}
          width={64}
          height={64}
          className="invert"
          alt={user.find((x) => x._id == slug).nom}
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-5">
            <p className="font-semibold">
              {user.find((x) => x._id == slug).nom}
            </p>
            <p>{user.find((x) => x._id == slug).prenom}</p>
          </div>
          <p>{user.find((x) => x._id == slug).mail}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-5 border-2 border-zinc-700 rounded outline-none bg-zinc-900">
        <h3 className="text-xl">
          Informations personnelles de {user.find((x) => x._id == slug).nom}{" "}
          {user.find((x) => x._id == slug).prenom}
        </h3>
        <p>Adresse postale: {user.find((x) => x._id == slug).adress}</p>
        <p>Numéro de téléphone: {user.find((x) => x._id == slug).tel}</p>
        <p>Date de naissance: {user.find((x) => x._id == slug).anniv}</p>
        <p>Sexe: {user.find((x) => x._id == slug).gender}</p>
      </div>

      <button
        className="border-2 border-zinc-700 rounded outline-none w-fit mt-5 text-red-500 cursor-pointer w-full"
        onClick={() => {
          axios.delete(
            `http://localhost:8080/${user.find((x) => x._id == slug)._id}`
          );
        }}
      >
        <Link href={"/"}>
          <p className="hover:animate-pulse m-2">Supprimer l'utilisateur</p>
        </Link>
      </button>
    </div>
  );
};

export default NoPageFound;

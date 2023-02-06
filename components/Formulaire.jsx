import React, { useState } from "react";
const axios = require("axios").default;

const Formulaire = () => {
  const [newUser, setNewUser] = useState({
    nom: "",
    prenom: "",
    mail: "",
    adress: "",
    genre: "",
    tel: "",
    anniv: "",
  });

  const updateName = (e) => {
    const fieldName = e.target.name;
    setNewUser((existingValues) => ({
      ...existingValues,
      [fieldName]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col gap-2 mx-auto w-full border-2 rounded-lg border-zinc-700 hover:border-indigo-600/75 duration-75">
      <form
        className="flex flex-col gap-2 w-full p-2 rounded-lg bg-zinc-800"
        onSubmit={(event) => {
          event.preventDefault();

          axios.post("http://localhost:8080", {
            nom: newUser.nom,
            prenom: newUser.prenom,
            mail: newUser.mail,
            gender: newUser.gender,
            adress: newUser.adress,
            tel: newUser.tel,
            anniv: newUser.anniv,
          });
        }}
      >
        <h3 className="text-center text-xl">Formulaire d'inscription</h3>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600 w-full"
            placeholder="Nom"
            value={newUser.nom}
            name="nom"
            id="nom"
            onChange={updateName}
          />
          <input
            type="text"
            className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600 w-full"
            placeholder="Prénom"
            value={newUser.prenom}
            name="prenom"
            id="prenom"
            onChange={updateName}
          />
        </div>
        <input
          type="text"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600"
          placeholder="Adresse mail"
          value={newUser.mail}
          name="mail"
          id="mail"
          onChange={updateName}
        />
        <input
          type="text"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600"
          placeholder="Adresse postale"
          value={newUser.adress}
          name="adress"
          id="adress"
          onChange={updateName}
        />
        <input
          type="text"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600"
          placeholder="Numéro de téléphone"
          value={newUser.tel}
          name="tel"
          id="tel"
          onChange={updateName}
        />
        <input
          type="text"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none bg-zinc-900 focus:border-2 focus:border-indigo-600"
          placeholder="Date d'anniversaire au format jj/mm/aaaa"
          value={newUser.anniv}
          name="anniv"
          id="anniv"
          onChange={updateName}
        />

        {/*  */}
        <div className="flex flex-row border-2 border-zinc-700 rounded-lg outline-none bg-zinc-900 justify-evenly">
          <div className="flex justify-center items-center pl-3 ">
            <input
              type="radio"
              value="Femme"
              id="genderFemme"
              name="gender"
              onChange={updateName}
            />
            <label
              htmlFor="genderFemme"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Femme
            </label>
          </div>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              value="Homme"
              id="genderHomme"
              name="gender"
              onChange={updateName}
            />
            <label
              htmlFor="genderHomme"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Homme
            </label>
          </div>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              value="Autre"
              id="genderAutre"
              name="gender"
              onChange={updateName}
            />
            <label
              htmlFor="genderAutre"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Autre
            </label>
          </div>
        </div>
        {/*  */}
        <button
          type="submit"
          className="border-2 border-zinc-700 rounded-lg p-2 outline-none w-fit mx-auto hover:scale-105 duration-75 bg-zinc-900 hover:border-2 hover:border-indigo-600"
        >
          M'inscrire !
        </button>
      </form>
    </div>
  );
};

export default Formulaire;

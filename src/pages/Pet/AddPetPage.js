import React, { useEffect, useState } from "react";
import AddPetPhoto from "../../components/Add&Create/AddPetPhoto";
import CreatePet from "../../components/Add&Create/CreatePet";

function AddPetPage() {
  return (
    <div className="flex-col justify-center">
      <h1 className="text-center text-accent-green">Add Pet</h1>
      <AddPetPhoto />
      <CreatePet />
    </div>
  );
}

export default AddPetPage;

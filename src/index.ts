import type { PipedrivePerson } from "./types/pipedrive";
import { CreatePayload } from "./mappers/person.mapper";
import {
  searchPerson,
  createPerson,
  updatePerson,
} from "./services/pipedrive.service";

const syncPdPerson = async (): Promise<PipedrivePerson> => {
  try {
    // console.log("running here")
    const payload = CreatePayload();

    if (!payload.name) { // ----> With name we will run a query in in the Pipedrive to check if person already exist or not.
      throw new Error("Name is required");
    }

    const persons = await searchPerson(payload.name); // ----->Searching that person in existing Database

    let result;

    if (persons.length > 0) { // -----> Person Already exist then Update them
      console.log("zero--->>")
      const personId = persons[0].item.id;
      result = await updatePerson(personId, payload);
    } else {
      result = await createPerson(payload); // -----> If Does not exist then create new person
    }

    return result as PipedrivePerson; // ----> While returning the result it should match with the type of the PipedrivePerson which we have defined in our types.
  } catch (error: any) {
    console.log("---->Error in syncPdPerson:", error);
    throw error;
  }
};

syncPdPerson()
  .then((res) => console.log("--->Success:", res))
  .catch((err) => console.log("---->Error:", err));
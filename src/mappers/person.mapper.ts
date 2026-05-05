import inputData from "../mappings/inputData.json";
import mappings from "../mappings/mappings.json";
import { getValueFromPath } from "../utils/object";

export const CreatePayload = () => {
  const payload: any = {};

  for (const map of mappings) {
   // console.log("data map",map)
    const value = getValueFromPath(inputData, map.inputKey); // --> Get dynamic Values
    console.log("value",value)

    if (value !== undefined && value !== null) { //--> Creating payload only valuw is not null and undefined
      if (map.pipedriveKey === "email") {
        payload.email = [{ value, primary: true }];
      } else if (map.pipedriveKey === "phone") {
        payload.phone = [{ value, primary: true }];
      } else {
        payload[map.pipedriveKey] = value;
      }
    }
  }
  console.log("payload",payload)

  return payload;
};
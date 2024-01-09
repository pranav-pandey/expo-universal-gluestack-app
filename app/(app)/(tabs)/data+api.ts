import { ExpoRequest, ExpoResponse } from "expo-router/server";

export async function GET(req: ExpoRequest): Promise<ExpoResponse> {
  const value = await fetch("https://api.zippopotam.us/us/33162", {
    method: "GET",
  }).then((response) => response.text());

  console.log(value, "value");

  return ExpoResponse.json(value);
}

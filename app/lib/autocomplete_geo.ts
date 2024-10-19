import axios, { AxiosRequestConfig } from "axios";
import { FeatureCollection } from "geojson";

const geo_autocomplete_options: AxiosRequestConfig = {
  method: "GET",
  url: `https://api.geoapify.com/v1/geocode/autocomplete`,
  headers: { accept: "application/json" },
};

export async function autocompleteGeolocationSearch({
  apiKey,
  query,
  countryCode,
  isCity,
  //   languageResult,
  state,
}: {
  apiKey: string;
  query: string;
  countryCode?: string;
  isCity?: boolean;
  state?: string;
  //   languageResult?: string;
}) {
  const params: AxiosRequestConfig["params"] = {
    apiKey: apiKey,
    text: query,
    state: state,
    //   lang: languageResult ? languageResult : "en",
  };

  if (countryCode) {
    console.log("countryCode: ", countryCode);

    params.filter = `countrycode:${countryCode.toLowerCase()}`;
  }

  if (isCity) {
    params.type = "city";
  }

  const options: AxiosRequestConfig = {
    ...geo_autocomplete_options,
    params: params,
  };
  try {
    const response = await axios.request<FeatureCollection>(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

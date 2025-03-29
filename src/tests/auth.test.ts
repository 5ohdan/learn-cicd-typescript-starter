import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

test("getAPIKey should return the API key from the Authorization header", () => {
  const headers = {
    authorization: "ApiKey 1234567890",
  };

  const apiKey = getAPIKey(headers);
  expect(apiKey).toBe("1234567890");
});

test("getAPIKey should return null if the Authorization header is not present", () => {
  const headers = {};
  const apiKey = getAPIKey(headers);
  expect(apiKey).toBeNull();
});

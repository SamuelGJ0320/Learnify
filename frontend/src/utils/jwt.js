import jwt from "jsonwebtoken";

/**
 * Check if a JWT token is expired
 * @param {string} token - The JWT token to check
 * @returns {boolean} - True if the token is expired or invalid, false otherwise
 */
export function isJwtExpired(token) {
  if (!token) return true;

  try {
    // Split the token and get the payload part (second part)
    const payload = token.split(".")[1];
    if (!payload) return true;

    // Decode the base64 payload
    const decodedPayload = JSON.parse(
      Buffer.from(payload, "base64").toString()
    );

    // Check if exp exists and is not expired
    if (!decodedPayload.exp) return true;

    const currentTime = Math.floor(Date.now() / 1000);
    return decodedPayload.exp < currentTime;
  } catch (error) {
    console.error("Error checking JWT expiration:", error);
    return true; // Consider invalid tokens as expired
  }
}

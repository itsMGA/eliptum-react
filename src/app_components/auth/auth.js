export const isAuthenticated = () => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return false; // No token present
  }

  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    console.error("Invalid JWT token format");
    return false; // Invalid token format
  }

  const [, payloadBase64] = tokenParts;
  try {
    // Decode the payload from base64
    const payload = JSON.parse(atob(payloadBase64));
    // Check if token is expired
    if (payload.exp) {
      const currentTime = Date.now() / 1000; // Convert to seconds
      if (payload.exp < currentTime) {
        // Token expired
        localStorage.removeItem("access_token"); // Clear expired token from storage
        console.log("JWT Token expired, removed");
        return false;
      }
    } else {
      console.log("JWT Token not expired, proceeded to keep user loggedin");
      return true;
    }
  } catch (error) {
    console.error("Token decoding failed:", error);
    return false; // Token is invalid
  }
};

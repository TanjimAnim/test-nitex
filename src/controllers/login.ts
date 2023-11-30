export default async function login() {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set Content-Type header
      },
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    if (!response.ok) {
      // Check if response is not OK (status code other than 2xx)
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw new Error("An error occurred while logging in");
  }
}

export async function getApiData(str: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/${str}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }

    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

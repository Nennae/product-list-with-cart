export const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data fetched from data.js:", data);
    return data;
  } catch (error) {
    console.error("Error fetching the JSON in data.js:", error);
    return [];
  }
};

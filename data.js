export const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    console.log("Response Status:", response.status); 

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data); 

  } catch (error) {
    console.error("Error fetching the JSON:", error);
  }
};

fetchData();

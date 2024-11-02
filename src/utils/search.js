export function filterData(searchText, restaurants) {
    const filtered = restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filtered;
  }
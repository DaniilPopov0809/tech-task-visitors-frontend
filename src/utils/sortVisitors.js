const sortVisitors = (visitors, sortColumn, sortDirection) => {
    if (sortColumn) {
        visitors.sort((a, b) => {
          const valueA = a[sortColumn];
          const valueB = b[sortColumn];
    
          return (
            valueA.localeCompare(valueB, undefined, { sensitivity: "base" }) *
            (sortDirection === "asc" ? 1 : -1)
          );
        });
      }
}

export default sortVisitors;
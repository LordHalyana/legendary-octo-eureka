import React from "react";

function Backendcheck() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div style={{paddingBottom:"400px"}}>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default Backendcheck;

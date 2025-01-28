import React, { useState } from "react";
import FormPage from "./Components/Formpage";
import TablePage from "./Components/Tablepage";

function App() {
  const [data, setData] = useState([]); // Store data
  const [editData, setEditData] = useState(null); // For editing

  return (
    <div className="App">
      {editData || data.length === 0 ? (
        <FormPage
          data={data}
          setData={setData}
          editData={editData}
          setEditData={setEditData}
        />
      ) : (
        <TablePage
          data={data}
          setData={setData}
          setEditData={setEditData}
        />
      )}
    </div>
  );
}

export default App;

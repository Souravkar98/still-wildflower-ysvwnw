import Checkbox from "./Checkbox";
export default function List({ treeData, padding, handleChange }) {
  return (
    <div>
      {treeData.map((e) => {
        return (
          <div key={e.id}>
            <div
              style={{
                display: "flex",
                marginLeft: `${padding}px`,
              }}
            >
              <Checkbox
                status={e.status}
                handleChange={handleChange}
                id={e.id}
              />
              <p>{e.label}</p>
            </div>
            {e?.children && e.children.length ? (
              <List
                treeData={e.children}
                padding={padding * 2}
                handleChange={handleChange}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

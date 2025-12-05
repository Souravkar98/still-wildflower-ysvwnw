import treeData from "./data";
import List from "./List";
import { STATUS } from "./constant";
import { useState } from "react";
export default function App() {
  const [treeDatas, setTreeDatas] = useState(treeData);
  function setStatusForAllChildren(node, status) {
    if (!node.children) return node;
    return {
      ...node,
      children: node.children.map((child) =>
        setStatusForAllChildren({ ...child, status }, status)
      ),
    };
  }

  function calculateParentStatus(children) {
    const allChecked = children.every((c) => c.status === STATUS.CHECKED);
    const allUnchecked = children.every((c) => c.status === STATUS.UNCHECKED);

    if (allChecked) return STATUS.CHECKED;
    if (allUnchecked) return STATUS.UNCHECKED;
    return STATUS.INDETERMINATE;
  }

  function updateNodeStatus(tree, targetId, newStatus) {
    return tree.map((node) => {
      if (node.id === targetId) {
        let updated = {
          ...node,
          status: newStatus,
        };
        if (node.children?.length) {
          updated = setStatusForAllChildren(updated, newStatus);
        }
        return updated;
      }
      if (node.children && node.children.length) {
        let updatedChildren = updateNodeStatus(
          node.children,
          targetId,
          newStatus
        );

        const parentStatus = calculateParentStatus(updatedChildren);
        return { ...node, children: updatedChildren, status: parentStatus };
      }
      return node;
    });
  }
  const handleChange = (id, checked) => {
    const newStatus = checked ? STATUS.CHECKED : STATUS.UNCHECKED;
    const updatedTree = updateNodeStatus(treeDatas, id, newStatus);
    setTreeDatas(updatedTree);
  };

  return (
    <div className="App">
      <List treeData={treeDatas} padding={5} handleChange={handleChange} />
    </div>
  );
}

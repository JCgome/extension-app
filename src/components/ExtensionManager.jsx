import { useState, useMemo } from "react";
import dataJson from "../../data.json";
import { States } from "./States";
import { Section } from "./Section";

export const ExtensionManager = () => {
  const [extensions, setExtensions] = useState(dataJson);
  const [filter, setFilter] = useState("All");
  const [pendingToggle, setPendingToggle] = useState(null);

  const handleToggle = (name) => {
    setPendingToggle(name);

    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );

    setTimeout(() => {
      setPendingToggle(null);
    }, 300);
  };

  const handleRemove = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const filteredExtensions = useMemo(() => {
    return extensions.filter((ext) => {
      if (pendingToggle === ext.name) return true;
      if (filter === "Active") return ext.isActive;
      if (filter === "Inactive") return !ext.isActive;
      return true;
    });
  }, [extensions, filter, pendingToggle]);

  return (
    <>
      <States setFilter={setFilter} />
      <Section
        extensions={filteredExtensions}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </>
  );
};

import React, { memo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";

export const NavSearchInput = memo(() => {
  const navigate = useNavigate();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const searchTerm = query.get("q");
  const { value, onChange } = useInput(searchTerm ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (!e.target.value.trim()) {
        navigate(`/`);
        return;
    }
      navigate(`search?q=${e.target.value}`);
  };
  return (
    <input
      value={value}
      onChange={handleChange}
      className="nav_input"
      type="text"
      placeholder="영화를 검색해 주세요"
    />
  );
});
NavSearchInput.displayName = "NaveSearchInput";

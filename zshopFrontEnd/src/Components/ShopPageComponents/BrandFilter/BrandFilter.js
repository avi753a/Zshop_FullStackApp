import { Chip } from "@mui/material";
import "./BrandFilter.scss";
import { useState } from "react";

export function BrandFilter() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']; // Example list of names
    const [activeChips, setActiveChips] = useState([]);

    const handleChipClick = (name) => {
        if (activeChips.includes(name)) {
            setActiveChips(activeChips.filter((chip) => chip !== name));
        } else {
            setActiveChips([...activeChips, name]);
        }
    };

    return (
        <>
            <div className="brand-filter w-100 d-flex flex-column align-items-start justify-content-start">
                <p className="m-0 mb-2">Brands</p>
                <div className="brand-container w-90 d-flex flex-row align-items-start flex-wrap justidy-content-start gap-10 mb-2">
                    {names.map((name) => (
                        <Chip
                            key={name}
                            label={name}
                            className={`custom-chip ${activeChips.includes(name) ? 'active' : ''}`}
                            onClick={() => handleChipClick(name)}
                            variant={activeChips.includes(name) ? 'filled' : 'outlined'}
                            color={activeChips.includes(name) ? 'dark' : 'default'} // Use default color to apply custom colors
                        />
                    ))}

                </div>
            </div>
        </>
    );
}
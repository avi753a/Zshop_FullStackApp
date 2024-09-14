import { Chip } from "@mui/material";
import { useState } from "react";
import  './TagFilter.scss'; // Import the SCSS module

export function TagFilter() {
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
        <div className="tag-filter w-100 d-flex flex-column align-items-start justify-content-start">
            <p className="m-0 mb-2">Tags</p>
            <div className="tag-container w-90 d-flex flex-row align-items-start flex-wrap justify-content-start gap-10 mb-2">
                {names.map((name) => (
                    <Chip
                    key={name}
                    label={name}
                    className={`custom-chip ${activeChips.includes(name) ? 'active' : ''}`}
                    onClick={() => handleChipClick(name)}
                    variant={activeChips.includes(name) ? 'filled' : 'outlined'}
                    color='dark' // Use default color to apply custom colors
                />
                ))}
            </div>
        </div>
    );
}

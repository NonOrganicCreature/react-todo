import { useState } from "react";
const useSwitch = () => {
    const [checked, setChecked] = useState(false);

    const onChange = (event) => {
        setChecked(event.target.checked);
    };

    return {
        checked,
        onChange,
    };
};
export { useSwitch };

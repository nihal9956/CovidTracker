import React, { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector'

function CountryPicker({ getCountry }) {

    const [country, setCountry] = useState('');

    function selectCountry(val) {
        setCountry(val);
        getCountry(val);
    }


    return (
        <div>
            <div style={{ display: "grid", placeItems: "center", marginTop: "5rem" }}>
                <CountryDropdown
                    style={{ padding: "1.5rem", border: "none", borderBottom: "1px solid gray", cursor: "pointer", fontSize: "1.5rem" }}
                    value={country}
                    onChange={(val) => selectCountry(val)} />
            </div>

        </div>
    )
}

export default CountryPicker

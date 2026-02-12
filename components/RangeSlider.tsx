"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

interface RangeSliderProps {
    min: number;
    max: number;
    step?: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
    formatLabel?: (value: number) => string;
    className?: string;
    label?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    min,
    max,
    step = 1,
    value,
    onChange,
    formatLabel,
    className = "",
    label,
}) => {
    const [minVal, setMinVal] = useState(value[0]);
    const [maxVal, setMaxVal] = useState(value[1]);
    const minValRef = useRef(value[0]);
    const maxValRef = useRef(value[1]);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Update state when props change
    useEffect(() => {
        setMinVal(value[0]);
        setMaxVal(value[1]);
        minValRef.current = value[0];
        maxValRef.current = value[1];
    }, [value]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (range.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(maxValRef.current);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (range.current) {
            const minPercent = getPercent(minValRef.current);
            const maxPercent = getPercent(maxVal);
            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    return (
        <div className={`relative w-full h-12 flex items-center ${className}`}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minVal}
                onChange={(event) => {
                    const value = Math.min(Number(event.target.value), maxVal - step);
                    setMinVal(value);
                    minValRef.current = value;
                    onChange([value, maxVal]);
                }}
                aria-label={label ? `${label} min` : "Minimum value"}
                className="thumb thumb--left pointer-events-none absolute z-30 h-0 w-full outline-none"
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxVal}
                onChange={(event) => {
                    const value = Math.max(Number(event.target.value), minVal + step);
                    setMaxVal(value);
                    maxValRef.current = value;
                    onChange([minVal, value]);
                }}
                aria-label={label ? `${label} max` : "Maximum value"}
                className="thumb thumb--right pointer-events-none absolute z-40 h-0 w-full outline-none"
            />

            <div className="relative w-full">
                <div className="absolute  bottom-0 left-0 right-0 h-1.5 rounded-full bg-black/40"></div>
                <div
                    ref={range}
                    className="absolute  bottom-0 h-1.5 rounded-full bg-[#cfb480]"
                ></div>
            </div>

            <style jsx>{`
        /* Custom styles for the range slider to make standard inputs look like the design */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
          pointer-events: auto;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: #cfb480;
          border: 4px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          margin-top: -9px; /* Center relative to h-1.5 (6px) track: (6 - 24) / 2 = -9 */
        }
        
        input[type="range"]::-moz-range-thumb {
          pointer-events: auto;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background-color: #cfb480;
          border: 4px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
          cursor: pointer;
        }

        /* Running track removal as we use a custom div */
        input[type="range"]::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
        }
        
        input[type="range"]::-moz-range-track {
          -webkit-appearance: none;
          box-shadow: none;
          border: none;
          background: transparent;
        }
      `}</style>
        </div>
    );
};

export default RangeSlider;

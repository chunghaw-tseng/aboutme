import React, { useEffect, useState } from "react";
import { PLabel, PFull, PVisual, PHeading, PPercentage } from "./skillsElements";
import { useTranslation } from 'react-i18next';


const ProgressLine = ({
  label,
  needsTag = false,
  backgroundColor = "#e5e5e5",
  textbgColor = "#e5e5e5",
  // expected format for visual parts
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  // Starting values needed for the animation
  // Mapped by "visualParts" so it can work with multiple values dynamically
  // It's an array of percentage widths
  const { t, i18n } = useTranslation();
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    // You need to wrap it to trigger the animation
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map(item => {
            console.log(item.percentage);
          return item.percentage;
        })
      );
    });
  }, [visualParts]);

  // TODO Add labels in front and the back of bar
  return (
    <>
      <PFull bgcolor ={backgroundColor}>
        <PHeading bgcolor={textbgColor} >{label}</PHeading>
        {visualParts.map((item, index) => {
          // map each part into separate div and each will be animated
          // because of the "transition: width 2s;" css in class "progressVisualPart"
          // and because of the new width ("widths[index]", previous one was 0)
          return (
            <PVisual
              // There won't be additional changes in the array so the index can be used
              /* eslint-disable-next-line react/no-array-index-key */
              key={index}
              bgcolor={item.color}
              size={widths[index]}
            />
          );
        })}
        {needsTag? <PPercentage>{t('fluency')}</PPercentage> : <></>}
      </PFull>
    </>
  );
};

export default ProgressLine;

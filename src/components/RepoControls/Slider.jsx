const {
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
} = require('@chakra-ui/react');
const { useState } = require('react');

export default function SliderThumbWithTooltip({
  sliderValue,
  setSliderValue,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Slider
      id="slider"
      defaultValue={15}
      min={0}
      max={1000}
      width={{base:"xl", md:"3xl"}}
      colorScheme="teal"
      value={sliderValue}
      onChange={v => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={250} mt="1" ml="-2.5" fontSize="sm">
        250
      </SliderMark>
      <SliderMark value={500} mt="1" ml="-2.5" fontSize="sm">
        500
      </SliderMark>
      <SliderMark value={750} mt="1" ml="-2.5" fontSize="sm">
        750
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="bottom"
        isOpen={showTooltip}
        label={`${sliderValue} Stars`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
}

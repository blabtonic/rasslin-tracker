import React, { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.25: 'Trash',
  0.5: 'Awful',
  1: 'Bad',
  1.25: 'Terrible',
  1.5: 'Wretched',
  2: 'Ok',
  2.25: 'Middling',
  2.5: 'Average',
  3: 'Watchable',
  3.25: 'Entertaining',
  3.5: 'Good',
  4: 'Great',
  4.25: 'Really Great',
  4.5: 'A Must watch',
  5: 'Amazing',
};

export default function StarRatings() {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <Typography>
      <Rating
        name="rating-feedback"
        value={0}
        precision={0.25}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Typography>
  );
}

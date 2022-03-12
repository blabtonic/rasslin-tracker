import React, { useState } from 'react';
import { Box, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Awful',
  1: 'Bad',
  1.5: 'Wretched',
  2: 'Ok',
  2.5: 'Ok',
  3: 'Average',
  3.5: 'Average',
  4: 'Great',
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
        value={1}
        precision={0.5}
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

/*
              <Typography component="h3" variant="h5">
                Ratings
                <Rating
                  name="half-rating"
                />
              </Typography>
*/

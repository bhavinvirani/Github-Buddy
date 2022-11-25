import { IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdBookmark } from 'react-icons/md';

const BookmarkToogle = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const handleClick = () => {
    setBookmarked(!bookmarked);
  };
  return (
    <IconButton
      variant={bookmarked ? 'solid' : 'outline'}
      colorScheme="teal"
      aria-label="Call Sage"
      fontSize="20px"
      icon={<MdBookmark />}
      isLoading={false}
      onClick={handleClick}
    />
  );
};

export default BookmarkToogle;

import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  const ref = useRef();
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    //call api get file;
    setFile();
    setPreview();
  };

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            'https://api.adorable.io/avatars/50/abott@adorable.pngCopy"'
          }
          alt=""
        />

        <input
          ref={ref}
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}

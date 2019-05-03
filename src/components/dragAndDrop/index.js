import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {Segment} from 'semantic-ui-react'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      props.onChangeFile(acceptedFiles)
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    },
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (

      <section className="container">
        <div {...getRootProps({className: 'dropzone'})}>
          <input name="image" {...getInputProps()} />
          <Segment secondary>
              <p>Drag 'n' drop some files here, or click to select files</p>
          </Segment>
        </div>
      {
        !props.updated ?
          <aside style={thumbsContainer}>
            {thumbs}
          </aside>
        : ''
      }
      </section>
  );
}
export default Previews

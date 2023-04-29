import react from 'react'

function SubmitButton({ handleFileSubmit, files, buttonStyle, imageContainerRef }) {
  if (!buttonStyle) {
    buttonStyle = {
      backgroundColor: 'white',
      color: 'black',
      padding: '5px 10px 5px 10px',
      cursor: 'pointer',
      outline: '1px solid black',
      borderRadius: '15px',
    }
  }

  // default submit button behavior
  if (!handleFileSubmit) {
    handleFileSubmit = () => {
      console.log('Please pass a handleFileSubmit prop to Submit button');
      console.log('Format: (e, files) => * code to manage files * ');
    }
  }

  // sort raw files into array based on order of image elements in DOM
  const sortAndHandleFileSubmit = () => {
    const orderedFiles = [];

    const imageContainers = imageContainerRef.current.children
      for (const imageContainer of imageContainers) {
        const position = imageContainer.children[0].children[1].id;
        orderedFiles.push(Object.values(files)[position]);
      }

    handleFileSubmit(orderedFiles);
  }

  return (
    <>
      <input id="submit-button" onClick={sortAndHandleFileSubmit} style={{display: 'none'}}></input>
      <label
      htmlFor="submit-button"
      style={buttonStyle}
      title="Submit Images"
      >  
        Submit
      </label>
    </>
  )
}

export { SubmitButton };

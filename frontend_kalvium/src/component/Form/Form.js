import React from 'react'

const Form = () => {
  return (
    <div className='mt-5' style={{paddingLeft:"200px",}}>
    <h2 style={{ fontSize: '16px', fontWeight: 500, letterSpacing: '-.16px', color: '#313131', opacity: 1 }}>
      Autofill your application
    </h2>
    <h5 style={{ fontSize: '12px', color: 'rgb(116, 120, 141)', fontWeight: 400, marginBottom: '10px', lineHeight: '18px' }}>
      Upload your Resume or CV in seconds with the autofill option.
    </h5>
    <div style={{ backgroundColor: 'rgb(245, 246, 250)', padding: '20px', opacity: 1, border: '2px dashed #ebedf2', display: 'flex', textAlign: 'center', cursor: 'pointer', flexDirection: 'column', alignItems: 'center', position: 'relative', borderRadius: '5px', width: '1000px' }}>
      <h3 style={{ fontSize: '14px', fontWeight: 500, color: 'rgb(49, 49, 49)', lineHeight: '21px', marginBottom: '1px' }}>
        Upload your resume or drag and drop it here
      </h3>
      <h3 style={{ fontSize: '13px', fontWeight: 400, color: 'rgb(116, 120, 141)', lineHeight: '21px' }}>
        Only .doc,.docx,.pdf,.odt,.rtf
      </h3>
    </div>
  </div>
);
}

export default Form
